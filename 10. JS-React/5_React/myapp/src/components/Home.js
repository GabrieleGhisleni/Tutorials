import React from "react";
import {Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from "./Loading";
import {baseUrl} from './../shared/baseUrl'

function RenderCard({item, isLoading, errMsg}){


    if (isLoading){
        return(
            <Loading />
        );
    }
    else if (errMsg){
        console.log('else if ERRMSG ',item, isLoading, errMsg)
        return (
            <h4>{errMsg}</h4>
        );
    }

    else{
        console.log('PASSED', item)

        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}/>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {/* if exists then render otherwhise do not render anything */}
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function Home(props){
    return (
        <div className='container'>
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.dish}
                                isLoading={props.dishLoading}
                                errMsg={props.dishErrMsg}/>
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promotion}
                                    isLoading={props.promosLoading}
                                    errMsg={props.promosErrMsg}></RenderCard>
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leader} ></RenderCard>
                </div>
            </div>
        </div>
    );
}

export default Home;