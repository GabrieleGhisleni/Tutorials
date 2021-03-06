import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './Loading';
import {baseUrl} from './../shared/baseUrl'

function RenderMenuItem ({dish}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={dish.id}>
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    if (props.dishes.isLoading){
        return (
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishErrMsg){
        return (
        <div className='container'>
            <div className='row'>
                <h4>{props.dishes.dishErrMsg}</h4>
            </div>
        </div>

        );
    }
    else {
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <h3>Menu</h3>
                <div className="row">
                    {menu}
                </div>
            </div>
            
        );
    }
}

export default Menu;