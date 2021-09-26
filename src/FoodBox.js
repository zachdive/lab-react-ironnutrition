import React from "react"
import { Card, Col, Divider, Button } from "antd";




function FoodBox ({yeet, bruh}) {

      

      return (
    <>
      <Col>
        <Card
          title={yeet.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={yeet.image} height={60} alt="foodimage" />
          
          <p>Calories:{yeet.calories}</p>
          <p>Servings: {yeet.servings}</p>
          <p>
            <b>Total Calories: {yeet.calories * yeet.servings} </b> kcal
          </p>
          <Button onClick={() => {bruh(yeet.name)}} type="primary"> Delete:  </Button>
        </Card>
      </Col>

    </>

      )
      



}



export default FoodBox;

