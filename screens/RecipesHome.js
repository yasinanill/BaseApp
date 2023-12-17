import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Activite from '../components/Activities/Activite'
import ActivitiesHome from '../components/Activities/ActivitiesHome'
import BmiCalculator from '../components/Calculator/bmiCalculator'

export default function RecipesHome() {
  return (
    <View>
      <BmiCalculator/>
    </View>
  )
}

const styles = StyleSheet.create({})