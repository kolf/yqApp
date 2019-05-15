import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import "./header.scss";
import logoUrl from "./logo.png";

const navs = [
  {
    id: 1,
    text: "防伪查询",
    router: "/pages/index/index"
  },
  {
    id: 2,
    text: "原厂零件",
    children: [
      {
        id: 21,
        text: "保养件",
        router: "/pages/categoryList/index"
      },
      {
        id: 22,
        text: "易损件",
        router: "/pages/categoryList/index"
      },
      {
        id: 23,
        text: "一汽丰田精品",
        router: "/pages/categoryList/index"
      },
      {
        id: 24,
        text: "其他",
        router: "/pages/categoryList/index"
      }
    ]
  },
  {
    id: 3,
    text: "车主服务",
    children: [
      {
        id: 31,
        text: "活动计划",
        router: "/pages/categoryList/index"
      },
      {
        id: 32,
        text: "保养计划",
        router: "/pages/categoryList/index"
      },
      {
        id: 33,
        text: "会员俱乐部",
        router: "/pages/categoryList/index"
      },
      {
        id: 34,
        text: "车主在线调查",
        router: "/pages/categoryList/index"
      }
    ]
  },
  {
    id: 4,
    text: "了解更多",
    children: [
      // {
      //   id: 41,
      //   text: "官方微博",
      //   router: "/pages/outs/weibo"
      // },
      {
        id: 42,
        text: "官方微信",
        router: "/pages/categoryList/index"
      },
      {
        id: 43,
        text: "官方网站",
        onClick: e => {
          window.open("https://m.ftms.com.cn");
        }
      }
    ]
  }
];

export default class Header extends Component {
  state = {
    activeKey: ""
  };

  componentDidMount() {
    console.log(this, Taro);
  }

  handleClick = (nav, navLevel, e) => {
    e.stopPropagation();
    const { activeKey } = this.state;
    if (navLevel === 1) {
      this.setState({
        activeKey: nav.id === activeKey ? "" : nav.id
      });
    }
    if (nav.onClick) {
      nav.onClick();
    } else if (nav.router) {
      this.goTo(nav.router);
    }
  };

  goTo = url => {
    Taro.redirectTo({
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
            <View className='nav-item' key={n.id + ""}>
              <Text onClick={this.handleClick.bind(this, n, 1)}>{n.text}</Text>
              {this.state.activeKey === n.id && n.children && (
                <View key={n.id + ""} className='nav-children'>
                  {n.children.map(c => (
                    <View onClick={this.handleClick.bind(this, c, 2)}>
                      {c.text}
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
    );
  }
}
