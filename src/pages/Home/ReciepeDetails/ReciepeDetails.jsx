import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./ReciepeDetails.css"
const ReciepeDetails = () => {
  const recipeData = useLoaderData();
  console.log(recipeData);
  return (
    <div className="bg-dark bg-opacity-10">
      <div className="pt-5 mb-5 py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <img className="img-fluid" src={recipeData.chef_picture} alt="" />
            </Col> 
            <Col lg={6} >
              <div className="text-dark mt-5 ms-5">
              <h1 className="text-dark pt-5 fw-bold">Names: <span className="fw-bold">{recipeData.chef_name}</span></h1>
              <p className=" fs-5 mt-2 fw-bold">
                  Bio:{" "}
                  <span className="">
                    {recipeData.bio}
                  </span>{" "}
                </p>

                <p className="fs-5 fw-bold">
                  Years of experience:{" "}
                  <span className="">
                    {recipeData.years_of_experience}
                  </span>{" "}
                </p>

                <p className="fs-5 fw-bold">
                  Numbers of recipes:{" "}
                  <span className="">{recipeData.number_of_recipes}</span>
                </p>

                <p className="fs-5 fw-bold">
                  Likes: <span className="">{recipeData.likes}</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

<Container>
<div className="recipe-card">
{
recipeData.recipes.map((recipe) => (
<div className="recipe-card">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                  {
                    recipe.ingredients.map(ingredient=>
                      <div>
                        <li>{ingredient}</li>
                      </div>
                      )
                  }

                  <div>
                     <p className="text-secondary mt-3 fw-bold">Method: <span className="text-left fw-semibold">{recipe.cookingMethod}</span></p>
                  </div>
                   <p className="text-secondary mt-3 fw-bold">Rating: {recipe.rating}</p>
                </Card.Text>
                {/* <Button onClick={handleClick} variant="danger">Favorite button</Button>
                <ToastContainer /> */}
              </Card.Body>
            </Card>
          </div>
))
     }
</div>
</Container>



  
    </div>
  );
};

export default ReciepeDetails;
{/* <div className="cook-card">
        {cookDetail.recipes.map((recipe) => (
          
        ))}
      </div> */}