import React from 'react'
import {useContext,useState} from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
//Star Rating and other modules
import { Rate, Input, Button, Row } from 'antd';
import "antd/dist/antd.css";
import {CommentContext} from '../../contexts/CommentContext';
import {ProductContext} from '../../contexts/ProductContext';
import {Form} from 'react-bootstrap'
export default function Comment() {
    const {showComment, setShowComment,createComment,setShowToastComment} = useContext(CommentContext);
    const {productState:{products}}=useContext(ProductContext);
    const [newComment,setNewComment]=useState({
      nameComment:'',
      emailComment:'',
      product:'',
      contentComment:'',
      rate:'',
    })
    const {nameComment, emailComment,product,contentComment,rate} =newComment;
    const onChangeCreateCommentForm= event => setNewComment({
      ...newComment,
      [event.target.name]:event.target.value
    })
    const onSubmit = async event=>{
        event.preventDefault();
        const {success,message}=await createComment(newComment);
        setShowToastComment({show:success,message});
        handleClose();
      }
    const handleClose = () => setShowComment(false);
    //const { TextArea } = Input;
    return (
        <div>
                <Form.Group style={{margin:'20px'}}>
                    <Form.Text style={{fontSize:'15px'}}>Họ tên: </Form.Text>
                    <Form.Control style={{margin:'5px'}} type='text' placeholder='Họ và tên' value={nameComment} name='nameComment' onChange={onChangeCreateCommentForm} required/>
                </Form.Group>
                <Form.Group style={{margin:'20px'}}>
                    <Form.Text style={{fontSize:'15px'}}>Email: </Form.Text>
                    <Form.Control type='text' style={{margin:'5px'}} placeholder='Email' value={emailComment} name='emailComment' onChange={onChangeCreateCommentForm} required/>
                </Form.Group>
                <Form.Group style={{margin:'20px'}}>
                    <Form.Text style={{fontSize:'15px'}}>Nội dung: </Form.Text>
                    <Form.Control type='text' Row = {4} style={{margin:'5px'}} value={contentComment} name='contentComment' onChange={onChangeCreateCommentForm} required/>
                </Form.Group>
                <Form.Group style={{margin:'20px'}}>
                    <Form.Text style={{fontSize:'15px'}}>Đánh giá: </Form.Text>
                    
                    <Rate defaultValue={2} ></Rate>
                </Form.Group>
                <Form.Group style={{margin:'20px'}}>
                    <Form.Control as='select' value={product} name='product' onChange={onChangeCreateCommentForm}>
                        <option value="">--Chọn sản phẩm muốn đánh giá-</option>
                        {products.map(product=>(
                          <option value={product._id} key={product._id}>{product.nameCar}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Button htmlType="submit" onClick={onSubmit} style={{margin:'20px'}}>
                    Gửi
                 </Button>
          
          
        </div>
    )
}
