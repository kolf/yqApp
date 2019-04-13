import Taro, { Component } from "@tarojs/taro";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import imgUrl1 from "./15400043645.jpg";
import imgUrl2 from "./15400045057.jpg";
import imgUrl3 from "./15510781602.jpg";

export default class Banners extends Component {
  render() {
    return (
      <Swiper
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View>
            <Image src={imgUrl1} mode='widthFix' style='width: 100%' />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <Image src={imgUrl2} mode='widthFix' style='width: 100%' />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <Image src={imgUrl3} mode='widthFix' style='width: 100%' />
          </View>
        </SwiperItem>
      </Swiper>
    );
  }
}
