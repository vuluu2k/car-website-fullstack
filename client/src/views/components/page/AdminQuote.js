import React from 'react'
import {Table,Button} from 'react-bootstrap';
import {QuoteContext} from '../../../contexts/QuoteContext';
import {ConfirmContext} from '../../../contexts/ConfirmContext';
import {useContext,useEffect} from 'react';
import ConfirmModal from '../../../components/modal/ConfirmModal';
import moment from 'moment';

export default function AdminQuote() {
    const {quoteState:{quotes},getQuote,deleteQuote} = useContext(QuoteContext);
    const {showConfirmDeleteQuote:{show,quoteId},setShowConfirmDeleteQuote} = useContext(ConfirmContext);

    useEffect(() =>{
        getQuote()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[quotes]);
    const handleDelete=()=>{
        deleteQuote(quoteId)
        handleClose()
    }
    const handleClose=()=>setShowConfirmDeleteQuote({show:false,quoteId:''});

    return (
        <div className="container">
            <Table  bordered hover size="sm">
                <thead >
                    <tr>
                        <th >STT</th>
                        <th >Tên khách hàng</th>
                        <th >Số điện thoại</th>
                        <th >Sản phẩm</th>
                        <th >Được tạo</th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((quote,index)=>(
                        <tr key={quote._id}>
                            <td>{index + 1}</td>
                            <td>{quote.nameQuote}</td>
                            <td>{quote.phoneQuote}</td>
                            <td>{quote.product?quote.product.nameCar:'Đã bị xoá'}</td>
                            <td>{moment(quote.createdAt).format('DD/MM/YYYY HH:mm')}</td>
                            <td>
                                <center>
                                    <div className="d-flex justify-content-around align-items-center">
                                        <a href={`tel:${quote.phoneQuote}`}>
                                            <Button variant="outline-primary" size="sm" ><i className="fas fa-phone"></i></Button>
                                        </a>
                                        <Button onClick={()=>setShowConfirmDeleteQuote({show:true,quoteId:quote._id})} variant="outline-primary" size="sm" ><i className="fas fa-trash"></i></Button>
                                    </div>
                                </center>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <ConfirmModal title="Xác nhận" content="Bạn chắc chắn muốn xoá" show={show} onClick={handleDelete} onClose={handleClose} />
        </div>
    )
}
