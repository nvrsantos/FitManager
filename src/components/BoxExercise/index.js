import React from 'react';
import { View, Text, TouchableWithoutFeedback as TouchW } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { primary } from '../../utils/colors';
import styles from './style';

const BoxExerciseComponent = (props) => {
  console.log(props.item);
  return (
    <View style={styles.container}>
      <View style={styles.boxContent}>
        <View style={styles.leftContent}>
          <ShimmerPlaceHolder
            style={[styles.skeletonContainer, { width: '85%' }]}
            colorShimmer={[primary.skeleton, primary.lighter, primary.skeleton]}
            autoRun={true}
            visible={props.loaded}>
            <View style={styles.dateContainer}>
              <Text style={styles.textTitle}>{props?.item?.title || ""}</Text>
            </View>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            style={[styles.skeletonContainer, { width: '60%' }]}
            colorShimmer={[primary.skeleton, primary.lighter, primary.skeleton]}
            autoRun={true}
            visible={props.loaded}>
            <View style={styles.dateContainer}>
              <Icon name="calendar-clock" size={20} color="#fff" />
              <Text style={styles.text}>{props?.item?.day_of_week || ""}</Text>
            </View>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            style={[styles.skeletonContainer, { width: '70%' }]}
            colorShimmer={[primary.skeleton, primary.lighter, primary.skeleton]}
            autoRun={true}
            visible={props.loaded}>
            <View style={styles.dateContainer}>
              <Icon name="sync" size={20} color="#fff" />
              <Text style={styles.text}>{props?.item?.loop || ""}</Text>
            </View>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            style={[styles.skeletonContainer, { width: '50%' }]}
            colorShimmer={[primary.skeleton, primary.lighter, primary.skeleton]}
            autoRun={true}
            visible={props.loaded}>
            <View style={styles.dateContainer}>
              <Icon name="timer-off" size={20} color="#fff" />
              <Text style={styles.text}>{props?.item?.delay_time || ""}</Text>
            </View>
          </ShimmerPlaceHolder>
        </View>
        <TouchW onPress={() => props.onClick(props?.item?.id)}>
          <View style={styles.circleIcon}>
            <Icon name="delete" size={30} color="#fff" />
          </View>
        </TouchW>
      </View>
    </View>
  );
};

export default BoxExerciseComponent;
