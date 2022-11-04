import React from "react";
import useSWR from 'swr';
import Error from 'next/error'
import { Card } from 'react-bootstrap';

const ArtworkCardDetail = (props) =>{
    let objectID = props.objectID
    const fetcher = (...args) => fetch(...args).then((res) => res.json()); 

    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`, fetcher);

    let element = null;

    if(data?.primaryImage){
        element = data?.primaryImage
    }
    else{
        element = ""
    }

    return(
        <>
        {data?.objectID ? <Card >
            <Card.Img variant="top" src={element} />
            <Card.Body>
                <Card.Title>{data?.title ? data?.title : 'N/A'}</Card.Title>
                <Card.Text>
                <strong>Date:</strong> {data?.objectDate ? data?.objectDate : 'N/A'}<br />
                <strong>Classification:</strong> {data?.classification ? data?.classification : 'N/A'}<br />
                <strong>Medium:</strong> {data?.medium ? data?.medium : 'N/A'}<br /><br />
                <strong>Artist:</strong> {data?.artistDisplayName ? data?.artistDisplayName : 'N/A'} {" "}
                ( {data?.artistDisplayName ? <a href={data?.artistWikidata_URL} target="_blank" rel="noreferrer" >wiki</a> : ""} )<br />
                <strong>Credit Line:</strong> {data?.creditLine ? data?.creditLine : 'N/A'}<br />
                <strong>Dimensions:</strong> {data?.dimensions ? data?.dimensions : 'N/A'}<br />
                </Card.Text>
            </Card.Body>
        </Card>  : <Error statusCode={404} />}
        </>
    )
}

export default ArtworkCardDetail;