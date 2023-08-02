import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CommonSection from '../components/ui/CommonSection/CommonSection';
import Nftcard from '../components/ui/NFTCard/NftCard';
import img from '../assets/images/img-01.jpg';
import avatar from '../assets/images/ava-01.png';
import '../styles/create.css';


const item = {
    id: '04',
    title: 'Guard',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.',
    imgUrl: img,
    creator: 'Trista Francis',
    creatorImg: avatar,
    currentBid: 7.89,
}

const Create = () => {
    return <>
        <CommonSection title='Create Item' />

        <section>
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <h5 className='mb-4 text-light'>Preview Item</h5>
                        <Nftcard item={item} />
                    </Col>

                    <Col lg='9' mb='8' sm='6'>
                        <div className='create__item'>
                            <form>
                                <div className='form__input'>
                                    <label htmlFor=''>Upload file</label>
                                    <input type='file' className='upload__input' />
                                </div>

                                <div className='form__input'>
                                    <label htmlFor=''>Price</label>
                                    <input type='number' placeholder='Enter price for one item (ETH)' />
                                </div>

                                <div className='form__input'>
                                    <label htmlFor=''>Minimun Bid</label>
                                    <input type='number' placeholder='Enter minimum bid (ETH)' />
                                </div>

                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='form__input w-50'>
                                        <label htmlFor=''>Starting Date</label>
                                        <input type='date' />
                                    </div>

                                    <div className='form__input w-50'>
                                        <label htmlFor=''>Expiration Date</label>
                                        <input type='date' />
                                    </div>
                                </div>

                                <div className='form__input'>
                                    <label htmlFor=''>Title</label>
                                    <input type='text' />
                                </div>       

                                <div className='form__input'>
                                    <label htmlFor=''>Description</label>
                                    <textarea name='' id='' rows='7' placeholder='Enter description' className='w-100'></textarea>
                                </div>                                
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}


export default Create
