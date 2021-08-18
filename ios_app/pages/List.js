'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView
} from 'react-native';

import commonStyles from '../styles/commonStyles'

import ListApi from '../models/List';
import ListTab from '../components/ListTab';
import CourseList from '../components/CourseList';
import MyRefreshControl from '../components/MyRefreshControl';
import PageLoading from '../components/PageLoading';

const listApi = new ListApi();

class ListScreen extends Component {

 constructor(props) {
   super(props);
 
   this.state = {
    coursesFieldsData: [],
    coursesData: {},
    curIndex: 0,
    curField: 'all',
    isRefreshing: false,
    pageLoadingShow: true,
   };
 }
  componentDidMount () {
    this.getCourseFields();
    this.getCourses(this.state.curField)
  }

  getCourseFields () {
    listApi.getCourseFields()
    .then( res => {
      this.setState({ coursesFieldsData: [{ field: 'all', field_name: '全部课程' }].concat(res.result) })
    })
  }

  getCourses (field) {
    if (!this.state.isRefreshing) {
      this.setState({
        pageLoadingShow: true
      })
    }
    listApi.getCourses(field)
    .then( res => {
      let coursesData = this.state.coursesData;
      coursesData[field]= res.result;
      setTimeout(() => {
        this.setState({
          coursesData: coursesData,
          isRefreshing: false,
          pageLoadingShow: false,
        })
      }, 1000)
    })
  }

  checkTabItem (field, index) {
    this.setState({
      curIndex: index,
      curField: field
    }, () => {
      const { curField, coursesData } = this.state;
      !coursesData[curField] && this.getCourses(curField)      
    })
  }

  onRefresh () {
    const { curField, isRefreshing } = this.state;

    if (isRefreshing) return;

    this.setState({
      isRefreshing: true
    }, () => {
      const { curField } = this.state;
      this.getCourses(curField)
    })

  }

  render() {

    const {
      curIndex,
      curField,
      coursesData,
      isRefreshing,
      coursesFieldsData,
      pageLoadingShow
    } = this.state,
    {
      navigation
    } = this.props;
    return (
      <View style={ commonStyles.container }>
        <ListTab
          curIndex={ curIndex }
          checkTabItem={ this.checkTabItem.bind(this) }
          courseFieldData={coursesFieldsData}
        />
        <ScrollView
          refreshControl={
            <MyRefreshControl
              isRefreshing={isRefreshing}
              onRefresh={ this.onRefresh.bind(this) }
            />
          }
        >
          {
            pageLoadingShow ? 
            <PageLoading />
            :
            <CourseList
              coursesData={ coursesData[curField] || [] }
              navigation={ navigation }
            />
          }
        </ScrollView>
      </View>
    );
  }
}



export default ListScreen;