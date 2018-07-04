import React, { Component } from 'react'
import taiChiSoupimg from 'img/taiChiSoup.jpg'
import quailDishimg from 'img/quailDish.jpg'
import lemonChickenimg from 'img/lemonChicken.jpg'
import friedRiceimg from 'img/friedRice.jpg'
import FoodCard from './FoodCard/FoodCard'
import './Ourfood.css'

const foodItems = [{
  img: taiChiSoupimg,
  title: `太極菠菜南瓜湯`,
  description: `Tai Chi Spinach Pumpkin Soup`
}, {
  img: quailDishimg,
  title: `椒鹽鵪鶉`,
  description: `Salt & Pepper Quail`,
}, {
  img: lemonChickenimg,
  title: `檸檬煎軟鷄`,
  description: `Pan Seared Tender Chicken with Lemon`,
}, {
  img: friedRiceimg,
  title: `腊味雪豆炒飯`,
  description: `Sauteed Chinese Mixed Sausages, Duck, & Pork with Veggies & Rice`,
}]

class Ourfood extends Component {
  render() {
    return (
      <div>
        <h1 className="my-3 padding">Our Food Page</h1>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {foodItems.map((foodItem, index) => {
              return (
                <div className="col-12 col-lg-5 mx-2">
                  <FoodCard key={index} {...foodItem} />
                </div>
              )
            })}
            {/* <div className="col-12 col-md-4 mx-2">
              <FoodCard
                title="太極菠菜南瓜湯"
                description="Tai Chi Spinach Pumpkin Soup"
                img={taiChiSoupimg}
              />
            </div> */}
            {/* <div className="col-12 col-md-4 mx-2">
              <div className="card border-success box-shadow mb-4" style={{height: '20rem'}}>
                <img className="card-img-top" src={quailDishimg} alt="Dishes"></img>
                <div className="card-body p-2 bgcolor">
                  <h5 className="card-title">椒鹽鵪鶉</h5>
                  <p className="card-text">Salt & Pepper Quail</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mx-2">
              <div className="card border-success box-shadow mb-4" style={{height: '20rem'}}>
                <img className="card-img-top" src={lemonChickenimg} alt="Dishes"></img>
                <div className="card-body p-2 bgcolor">
                  <h5 className="card-title">檸檬煎軟鷄</h5>
                  <p className="card-text">Pan Seared Tender Chicken with Lemon</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mx-2">
              <div className="card border-success box-shadow mb-4" style={{height: '20rem'}}>
                <img className="card-img-top" src={friedRiceimg} alt="Dishes"></img>
                <div className="card-body p-2 bgcolor">
                  <h5 className="card-title">腊味雪豆炒飯</h5>
                  <p className="card-text">Sauteed Chinese Mixed Sausages, Duck, & Pork with Veggies & Rice</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Ourfood
