'use strict';

import React, { Component } from 'react';

import { ScrollView, View, Text, RefreshControl } from 'react-native';
import IndexApi from '../models/Index'
import { filterFiledData } from '../utils/ext'

import IndexSwiper from '../components/IndexSwiper'
import MainTitle from '../components/MainTitle'
import RecomCourseContent from '../components/RecomCourseContent'
import CourseList from '../components/CourseList'

const indexApi = new IndexApi();



class HomeScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      swipers: [],
      fields: [],
      courses: [],
      recomCourses: [],
      isRefreshing: true,
    };
  }

  componentDidMount() {
    this.getCourseDatas()
  }

  getCourseDatas () {
    indexApi.getCourseDatas()
    .then( res => {
      let time = setTimeout(() => {
        this.setState({
          swipers: res.result.swipers,
          fields: [{field_name: '推荐课程', field: ''}].concat(res.result.fields),
          courses: res.result.courses,
          recomCourses: res.result.recomCourses,
        }, () => {
          this.setState({
            isRefreshing: false
          })
        })
        clearTimeout(time)
      }, 1000)
    })
    .catch( err => {})
  }

  renderMainTitle(data, title = '') {
    if (data) {
      return <MainTitle title={data.field_name} />
    }
  }

  onRefresh () {
    if (this.state.isRefreshing) return;
    this.setState({
      isRefreshing: true
    })
    this.getCourseDatas();
  }
  
  renderRefreshControl (options) {
    const {
      isRefreshing,
      onRefresh,
      tintColor,
      title,
      titleColor
    } = options;
    return(
      <RefreshControl
        refreshing={ isRefreshing }
        onRefresh={ onRefresh }
        tintColor={ tintColor }
        title={ title }
        titleColor={ titleColor }
      />
    )
  }

  render() {

    const { navigation } = this.props,
          { swipers, fields, courses, recomCourses, isRefreshing } = this.state;
    return (
      <ScrollView
        automaticallyAdjustContentInsets={ false }
        showsVerticalScrollIndicator={ false }
        refreshControl={
          this.renderRefreshControl({
            isRefreshing,
            onRefresh: this.onRefresh.bind(this),
            tintColor: '#666',
            title: '正在加载...',
            titleColor: '#666',
          })
        }
      >
        <IndexSwiper
          swiperData={ swipers }
          navigation={ navigation }
        />
        { this.renderMainTitle(fields[0], null) }
        <RecomCourseContent
          navigation={ navigation }
          recomCoursesData={ recomCourses }
        />
        { this.renderMainTitle(fields[1], null) }
        <CourseList
          coursesData={ filterFiledData(courses, "0", false) }
          navigation={ navigation }
        />
        { this.renderMainTitle(fields[2], null) }
        <CourseList
          coursesData={ filterFiledData(courses, "1", false) }
          navigation={ navigation }
        />
        { this.renderMainTitle(fields[3], null) }
        <CourseList
          coursesData={ filterFiledData(courses, "2", false) }
          navigation={ navigation }
        />
        { this.renderMainTitle(fields[4], null) }
        <CourseList
          coursesData={ filterFiledData(courses, "3", false) }
          navigation={ navigation }
        />
      </ScrollView>
    );
  }
}


export default HomeScreen;