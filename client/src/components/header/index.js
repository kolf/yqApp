import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import "./header.scss";
import logoUrl from "./logo.png";

const navs = [
  {
    text: "防伪查询",
    router: "/pages/index/index"
  },
  {
    text: "原厂零件",
    router: "/pages/categoryList/index"
  },
  {
    text: "车主服务",
    router: "/pages/activityList/index"
  },
  {
    text: "了解更多",
    router: "/pages/more/index"
  }
];

export default class Header extends Component {
  goTo = url => {
    Taro.navigateTo({
      url
    });
  };

  render() {
    return (
      <View className='root'>
        <View className='brand'>
          <Image src={logoUrl} style='width: 130px' mode='widthFix' />
        </View>
        <View className='navs'>
          {navs.map(n => (
            <View
              className='nav-item'
              key={n.router}
              onClick={this.goTo.bind(this, n.router)}
            >
              {n.text}
            </View>
          ))}
        </View>
      </View>
    );
  }
}
