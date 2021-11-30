import React,{useState} from 'react'
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
//Star Rating and other modules
import { Rate, Form, Input, Button } from 'antd';
import "antd/dist/antd.css";

export default function Comment() {
    
    const { TextArea } = Input;
    return (
        <div>
            
                <Form.Item
                style={{margin:'20px'}}
                label="Họ tên"
                name="username"
                
                rules={[
                    {
                    type: 'text',
                    message: 'Vui lòng nhập tên!',
                    },
                    {
                    required: true,
                    message: 'Vui lòng nhập tên!',
                    },
                ]}
               
                >
                <Input />
                </Form.Item>
                
        
                <Form.Item
                 style={{margin:'20px'}}
                label="Email"
                name="email"
                
                rules={[
                    {
                    type: 'email',
                    message: 'Email không đúng!',
                    },
                    {
                    required: true,
                    message: 'Vui lòng nhập Email!',
                    },
                ]}
                
                >
                <Input />
                </Form.Item>
                <Form.Item
                 style={{margin:'20px'}}
                label="Nội dung"
                name="comment"
                
                rules={[
                    {
                    type: 'comment',
                    message: 'Vui lòng nhập nội dung!',
                    },
                    {
                    required: true,
                    message: 'Vui lòng nhập nội dung!',
                    },
                ]}
                
                >
                <TextArea rows={4}/>
                </Form.Item>
        
                <Form.Item
                style={{margin:'20px'}}
                    label="Đánh giá"
                    name="rating"
                   
                >
                
                <Rate allowHalf defaultValue={2.5} />
                </Form.Item>
        
                <Form.Item>
                <Button type="primary" htmlType="submit" >
                    Gửi
                </Button>
                </Form.Item>
            
        </div>
    )
}
