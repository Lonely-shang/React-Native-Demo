'use strict';

import React, { Component } from 'react';

import { ScrollView, View } from 'react-native';
import IndexApi from '../models/Index'

import IndexSwiper from '../components/IndexSwiper'

const indexApi = new IndexApi();



class HomeScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      swipers: [],
      fileds: [],
      courses: [],
      recomCourses: [],
    };
  }

  getCourseDatas () {
    indexApi.getCourseDatas()
    .then( res => {
      this.setState({
        swipers: res.result.swipers,
        fileds: res.result.fileds,
        courses: res.result.courses,
        recomCourses: res.result.recomCourses,
      })
    })
    .catch( err => {})
  }

  componentDidMount() {
    this.getCourseDatas()
  }

  render() {

    const { navigation } = this.props,
          { swipers, fileds, courses, recomCourses } = this.state;

    return (
      <ScrollView>
        <IndexSwiper
          swiperData={swipers}
          navigation={navigation}
        />
      </ScrollView>
    );
  }
}


export default HomeScreen;