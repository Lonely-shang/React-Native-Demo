'use strict';

import React, { Component } from 'react';

import { ScrollView, View } from 'react-native';
import IndexApi from '../models/Index'

import IndexSwiper from '../components/IndexSwiper'
import MainTitle from '../components/MainTitle'
import RecomCourseContent from '../components/RecomCourseContent'

const indexApi = new IndexApi();



class HomeScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      swipers: [],
      fields: [],
      courses: [],
      recomCourses: [],
    };
  }

  componentDidMount() {
    this.getCourseDatas()
  }

  getCourseDatas () {
    indexApi.getCourseDatas()
    .then( res => {
      this.setState({
        swipers: res.result.swipers,
        fields: res.result.fields,
        courses: res.result.courses,
        recomCourses: res.result.recomCourses,
      })
    })
    .catch( err => {})
  }

  getMainTitle(data, title = '') {
    if (data) {
      return <MainTitle title={data.field_name} />
    }
    return <MainTitle title={title} />
  }
  

  render() {

    const { navigation } = this.props,
          { swipers, fields, courses, recomCourses } = this.state;
    console.log(this.state)
    return (
      <ScrollView>
        <IndexSwiper
          swiperData={swipers}
          navigation={navigation}
        />
        { this.getMainTitle(null, "推荐课程") }
        <RecomCourseContent
          navigation={ navigation }
          recomCoursesData={ recomCourses }
        />
        { this.getMainTitle(fields[0], null) }

        { this.getMainTitle(fields[1], null) }

        { this.getMainTitle(fields[2], null) }

        { this.getMainTitle(fields[3], null) }
      </ScrollView>
    );
  }
}


export default HomeScreen;