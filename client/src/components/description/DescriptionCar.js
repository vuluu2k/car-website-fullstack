import React from 'react'
import {Table} from 'react-bootstrap';
import parse from 'html-react-parser';

export default function DescriptionCar({product}) {
    return (
        <div className="container">
            {product.descriptionCar&&
                <div>
                    <h4 style={{padding:'10px 0'}}>Mô tả chung</h4>
                    {parse(product.descriptionCar)}
                </div>
            }
            <div>
                <h4 style={{padding:'10px 0'}}>Thông số kĩ thuật</h4>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th width="50%">Thuộc tính</th>
                            <th>Chỉ số</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Tên xe</th>
                            <td>{product.nameCar}</td>
                        </tr>
                        <tr>
                            <th>Số chỗ ngồi</th>
                            <td>{product.seatsCar}</td>
                        </tr>
                        <tr>
                            <th>Kiểu xe</th>
                            <td>{product.TypeCar}</td>
                        </tr>
                        <tr>
                            <th>Xuất xứ</th>
                            <td>{product.madeInCar}</td>
                        </tr>
                        <tr>
                            <th>Kích thước DxRxC</th>
                            <td>{product.sizeCar}</td>
                        </tr>
                        <tr>
                            <th>Chiều dài cơ sở</th>
                            <td>{product.lengthBaseCar}</td>
                        </tr>
                        <tr>
                            <th>Động cơ</th>
                            <td>{product.engineCar}</td>
                        </tr>
                        <tr>
                            <th>Dung tích công tác</th>
                            <td>{product.workCapacityCar}</td>
                        </tr>
                        <tr>
                            <th>Loại nhiên liệu</th>
                            <td>{product.fuelTypeCar}</td>
                        </tr>
                        <tr>
                            <th>Dung tích bình nhiên liệu</th>
                            <td>{product.fuelCapacityCar}</td>
                        </tr>
                        <tr>
                            <th>Công suất cực đại</th>
                            <td>{product.maxPowerCar}</td>
                        </tr>
                        <tr>
                            <th>Mô-men xoắn cực đại</th>
                            <td>{product.maxTorqueCar}</td>
                        </tr>
                        <tr>
                            <th>Hộp số</th>
                            <td>{product.gearCar}</td>
                        </tr>
                        <tr>
                            <th>Hệ dẫn động</th>
                            <td>{product.driveSystemCar}</td>
                        </tr>
                        <tr>
                            <th>Treo trước/sau</th>
                            <td>{product.suspensionCar}</td>
                        </tr>
                        <tr>
                            <th>Phanh trước/sau</th>
                            <td>{product.brakeCar}</td>
                        </tr>
                        <tr>
                            <th>Trợ lực lái</th>
                            <td>{product.powerSteerCar}</td>
                        </tr>
                        <tr>
                            <th>Cỡ mâm</th>
                            <td>{product.plateSizeCar}</td>
                        </tr>
                        <tr>
                            <th>Khoảng sáng gầm xe</th>
                            <td>{product.lightCar}</td>
                        </tr>
                        <tr>
                            <th>Mức tiêu hao nhiên liệu trong đô thị</th>
                            <td>{product.consumptionInCar}</td>
                        </tr>
                        <tr>
                            <th>Mức tiêu hao nhiên liệu ngoài đô thị</th>
                            <td>{product.consumptionOutCar}</td>
                        </tr>
                        <tr>
                            <th>Mức tiêu hao nhiên liệu kết hợp</th>
                            <td>{product.consumptionCar}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
