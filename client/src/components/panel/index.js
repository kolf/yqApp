import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./panel.scss";

export default class Panel extends Component {
  render() {
    const { title } = this.props;
    return (
      <View className='root'>
        <View className='heading'>{title}</View>
        {this.props.children}
      </View>
    );
  }
}
