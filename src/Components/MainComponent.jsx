
import MenuComponent from './MenuComponent.js';
import DishDetailComponent from './DishDetails/DishDetailComponent';
import  React,{useState} from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import FooterComponent from './FooterComponent/FooterComponent'
import HomeComponent from './HomeComponent/HomeComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Contact from './ContactComponent/ContactComponent';
import Screen1 from  './Screen1/Screen1';
import Screen2 from './Screen2/Screen2';
import {connect} from 'react-redux';
import About from './AboutComponent/AboutComponent';
import { TestingReactHooksComponent } from './TestingReactHooksComponent/TestingReactHooksComponent.jsx';
import { ContactFormComponent } from './ContactFormComponent/ContactFormComponent.jsx';
import {addComment} from '../redux/ActionCreator';
import { HTMLRendering } from './TestingHTMLRendering/HTMLRendering.jsx';



const mapStateToProps = (state)=>{
  return {
    dishes : state.dishes,
    leaders : state.leaders,
    promotions : state.promotions,
    comments : state.comments
  }
}

const mapDispatchToProps = (dispatch)=>({
  addComment : (dishId,rating,author,comment)=>dispatch(addComment(dishId,rating,author,comment))

})


function MainComponent(props) {

    const [selectedDish,changeSelectedDish] = useState(null);
    
  return (
    <div>
        <HeaderComponent/>
        <Switch>
          <Route path='/home' component={()=><HomeComponent dish={props.dishes.filter(dish=>dish.featured)[0]} 
            leader={props.leaders.filter(leader=>leader.featured)[0]}
            promotion={props.promotions.filter(promo=>promo.featured)[0]}  
          />}
          />
          <Route exact path='/menu' component= {() => <MenuComponent dishes={props.dishes} comments={props.comments} />}/>
          <Route exact path='/menu/dish-detail' component={ () => <DishDetailComponent
          addComment={props.addComment}
          dish={selectedDish}/>  }/>
          <Route exact path="/contact-us" component={Contact}/>
          <Route exact path='/menu/:dishId' component={DishDetailComponent}/>
          <Route exact path='/screen1' component={Screen1}/>
          <Route exact path='/screen2/:id' component={Screen2}/>
          <Route exact path='/about' component={()=> <About leaders={props.leaders}/>}/>
          <Route exact path='/testingReactHooks' component={TestingReactHooksComponent}/>
          <Route exact path='/testingReactForms' component={ContactFormComponent}/>
          <Route exact path="/test-html-rendering" component={HTMLRendering} />
          <Redirect to="/home"/>
        </Switch>
        
        <FooterComponent/>
    </div>
  );
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));
