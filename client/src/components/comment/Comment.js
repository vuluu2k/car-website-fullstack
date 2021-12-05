import React from 'react'
import {useContext,useState} from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
//Star Rating and other modules
import {CommentContext} from '../../contexts/CommentContext';
import {ProductContext} from '../../contexts/ProductContext';
import ReactStars from "react-rating-stars-component";
import {Form, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
export default function Comment() {
    const {showComment, setShowComment,createComment,setShowToastComment} = useContext(CommentContext);
    const {productState:{products}}=useContext(ProductContext);
    const {slug}=useParams();
    const productSlug=products.find(product=>product.slug===slug);
    const [newComment,setNewComment]=useState({
      nameComment:'',
      emailComment:'',
      product:'',
      contentComment:'',
      rate:'',
    })
    const[toast,setToast] = useState({
      t:''
    })
    const{t}=toast;
    const {nameComment, emailComment,product,contentComment,rate} =newComment;
    const onChangeCreateCommentForm= event => setNewComment({
      ...newComment,
      product:productSlug._id,
      [event.target.name]:event.target.value
    })
    const onChangeCreateRateForm= event =>{
      console.log(event)
      setNewComment({
       ...newComment,
        rate:event+''
      })}
    const onSubmit = async event=>{
        event.preventDefault();
        const {success,message}=await createComment(newComment);
        setShowToastComment({show:success,message});
        if(nameComment!=''&&emailComment!=''&&contentComment!=''&&rate!='')
        {
          handleClose();
          
        }
        else{
          handle1();
        }
      }
    const onSubmitBack = async event=>{
        event.preventDefault();
        setNewComment({
          nameComment:'',
          emailComment:'',
          contentComment:'',
          rate:''
        })
        handleClose2();
        handle2();
      }
    const handleClose = () => setShowComment(false);
    const handleClose2 = () => setShowComment(true);
    const handle1 = () => setToast({
      t:'Vui lòng nhập đầy đủ thông tin!'
    });
    const handle2 = () => setToast({
      t:''
    });
    //const { TextArea } = Input;
    return (

        <div>
          {
              showComment&&
               <div>
                <p style={{color:'#ff0000'}}>{t}</p>
                <Form.Group style={{margin:'20px'}}>
                    <Form.Text style={{fontSize:'15px'}}>Họ tên: </Form.Text>
                    <Form.Control style={{margin:'5px'}} type='text' placeholder='Họ và tên' value={nameComment} name='nameComment' onChange={onChangeCreateCommentForm} required/>
                </Form.Group>
                <Form.Group style={{margin:'20px'}} className="mb-3" controlId="formBasicEmail">
                    <Form.Text style={{fontSize:'15px'}}>Email: </Form.Text>
                    <Form.Control type='email' style={{margin:'5px'}} placeholder='Email' value={emailComment} name='emailComment' onChange={onChangeCreateCommentForm} required/>
                    <Form.Text className="text-muted">
                        Vui lòng nhập email!
                  </Form.Text>
                </Form.Group>
                <Form.Group style={{margin:'20px'}}>
                    <Form.Text style={{fontSize:'15px'}}>Nội dung: </Form.Text>
                    <Form.Control as='textarea' rows={3} style={{margin:'5px'}} value={contentComment} name='contentComment' onChange={onChangeCreateCommentForm} required/>
                </Form.Group>
                <Form.Group style={{margin:'20px'}}>
                    <Form.Text style={{fontSize:'15px'}}>Đánh giá: </Form.Text>
                    
                    <ReactStars  onChange={onChangeCreateRateForm} size={40}></ReactStars>
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={onSubmit} style={{margin:'20px'}}>
                    Gửi
                 </Button>
                 
               </div>
              
               
               
          }
          
          {
            !showComment&&
            <div>
              <p>Bạn đã tạo đánh giá thành công!</p>
              <Button htmlType="submit" onClick={onSubmitBack} style={{margin:'20px'}}>
                    Quay lại
                 </Button>
            </div>
          }
          
          
        </div>
    )
}
