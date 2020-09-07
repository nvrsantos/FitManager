import React from 'react';
import { View, Text, TouchableWithoutFeedback as TouchW } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { primary } from '../../utils/colors';

const BoxWeightComponent = (props) => {
  const [weight, unit] = props?.item?.title.toString().split(' ');
  return (
    <View style={styles.container}>
      <View style={styles.boxContent}>
        <View style={styles.leftContent}>
          <ShimmerPlaceHolder
            style={[styles.skeletonContainer, styles.skeletonWeightText]}
            colorShimmer={[primary.skeleton, primary.lighter, primary.skeleton]}
            autoRun={true}
            visible={props.loaded}>
            <View style={styles.weightContainer}>
              <Text style={styles.weightText}>
                {weight} <Text style={styles.unitText}>{unit}</Text>
              </Text>
            </View>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            style={[styles.skeletonContainer, styles.skeletonDateText]}
            colorShimmer={[primary.skeleton, primary.lighter, primary.skeleton]}
            autoRun={true}
            visible={props.loaded}>
            <View style={styles.dateContainer}>
              <Icon name="calendar-clock" size={20} color="#fff" />
              <Text style={styles.dateText}>{props?.item?.date}</Text>
            </View>
          </ShimmerPlaceHolder>
        </View>
        <TouchW onPress={() => props.onClick(props?.item?._id)}>
          <View style={styles.circleIcon}>
            <Icon name="delete" size={30} color="#fff" />
          </View>
        </TouchW>
      </View>
    </View>
  );
};

export default BoxWeightComponent;
