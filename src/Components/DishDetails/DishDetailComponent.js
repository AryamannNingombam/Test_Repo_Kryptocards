import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardTitle,CardBody

,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';



function DishDetailComponent(props){
    const dish = props.dish;
    if (!dish){
        return (
            <>
            <h1>No dish selected!</h1>
            </>
        )
    }
    function renderComments({dish}){
        console.log(dish);
        const result = dish.comments.map((comment)=>{
            return (
                <li key={comment.id}>
                    <div className='col'>{comment.comment}</div>
                    <div className='col'>{comment.author} ,
                 {new Intl.DateTimeFormat  ('en-US', {
                        year : 'numeric',
                        month : 'short',
                        day : '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}</div>
              
                </li>
                    
                
            )
    
        });
    
        return result;
        
    }
    return (
        <>
        <div className='row'>
            <div className='col m-1'>
            <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardBody>
            <CardTitle>
               {dish.name}
               <CardText>{dish.description}</CardText>
            </CardTitle>
            
        </CardBody>
   </Card>

            </div>
            <div className='col'>
                <h2>Comments</h2>
                <ul>
                        {renderComments(dish)}
                </ul>
            </div>
        </div>
        </>
    );


}


export default DishDetailComponent;




