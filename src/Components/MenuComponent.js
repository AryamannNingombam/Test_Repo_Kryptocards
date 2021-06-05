import React, { Component,useState } from 'react'
import {Card,CardImg,CardImgOverlay,CardText,CardTitle,CardBody,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import DishDetailComponent from './DishDetails/DishDetailComponent';

function MenuComponent(props){
    const [dishes,changeDishes] = useState(props.dishes);
    const [comments,changeComments] = useState(props.comments);


    const menu = dishes.map(dish =>{
        return (
            <div  key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    
                    <CardImgOverlay>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                        {/* <p>{dish.description}</p> */}
                    </CardImgOverlay>
                    </Link>
                       
                </Card>
            </div>
        );
    });

    const DishWithId = ({match})=>{
            return ( 
                <DishDetailComponent dish={dishes.filter(
                    dish=> dish.id === parseInt(match.params.dishId,10)[0]
                    )}
                    comments = {comments.filter(comment=>{
                        return comment.dishId === parseInt(match.params.dishId);
                    })}
                    />



            )
    }


    return (
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>
                            Link 
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                            Menu 
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className='row'>
                {menu}
            </div>
        </div>
    )
}


export default MenuComponent;