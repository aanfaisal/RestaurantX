import React from 'react'
import { Text, View } from 'react-native'
import { AppStyle } from '../../styles'
import { RestoListScreenProps } from './props'
import { RestoListScreenState } from './state'

@AppStyle.withThemeClass()
export class RestoListScreen extends React.Component<
  RestoListScreenProps,
  RestoListScreenState
> {
  constructor(props: RestoListScreenProps) {
    super(props)
    this.state = {}
  }

  public render() {
    const{theme} = this.props as Required<RestoListScreenProps>

    return (
      <View style={theme.styles.background}>
        <Text style={theme.styles.screenContainer}>RestoListScreen</Text>
      </View>
    )
  }
}
