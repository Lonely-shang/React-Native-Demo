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

const listApi = new ListApi();

class ListScreen extends Component {

 constructor(props) {
   super(props);
 
   this.state = {
    coursesFieldsData: [],
    coursesData: {},
    curIndex: 0,
    curField: 'all',
    isRefreshing: false
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
    listApi.getCourses(field)
    .then( res => {
      let coursesData = {}
      coursesData[field]= res.result;
      this.setState({ coursesData: coursesData})
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
    
  }

  render() {

    const {
      curIndex,
      curField,
      coursesData,
      isRefreshing,
      coursesFieldsData
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
            coursesData[curField] &&
            <CourseList
              coursesData={ coursesData[curField] }
              navigation={ navigation }
            />
          }
        </ScrollView>
      </View>
    );
  }
}



export default ListScreen;