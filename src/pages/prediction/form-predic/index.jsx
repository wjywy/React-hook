import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";
import { Fragment } from "react";
import axios from 'axios'
const App = () => {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [higer, setHiger] = useState('');
    const handleThing = async () => {
        let formData = new FormData()
        formData.append('age', age)
        formData.append('height', height)
        formData.append('higer', higer)
        const res = await axios.post(`http://localhost:3000/prediction`, formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        console.log(res)
        // console.log(res, '预测数据')
    }
    return (
        <Fragment>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '50px', width: '400px' }}>
                <div style={{ color: 'white', fontSize: '24px', marginLeft: '30px' }}>奶茶xxx预测</div>
                <Form
                    labelCol={{
                        span: 4
                    }}
                    wrapperCol={{
                        span: 14
                    }}
                    style={{
                        maxWidth: 600,
                    }}>
                    <div>
                        <Form.Item>
                            <div style={{ color: 'white' }}>Radio</div>
                            <Radio.Group>
                                <Radio value={'apple'} style={{ color: 'white' }}>apple</Radio>
                                <Radio value={'pear'} style={{ color: 'white' }}>pear</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item>
                            <div style={{ color: 'white' }}>年龄</div>
                            <Input onChange={(e) => { setAge(e.target.value) }} />
                        </Form.Item>
                        <Form.Item>
                            <div style={{ color: 'white' }}>身高</div>
                            <Input onChange={(e) => { setHiger(e.target.value) }} />
                        </Form.Item>
                        <Form.Item>
                            <div style={{ color: 'white' }}>体重</div>
                            <Input onChange={(e) => { setHeight(e.target.value) }} />
                        </Form.Item>
                        <Form.Item>
                            <div style={{ color: 'white' }}>血压高压</div>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <div style={{ color: 'white' }}>总胆固醇</div>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <div style={{ color: 'white' }}>空腹血糖</div>
                            <Input />
                        </Form.Item>
                        <Form.Item
                        >
                            <Button style={{ backgroundColor: 'yellow' }} onClick={handleThing}>点击预测</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </Fragment>
    )
}
export default App;