import { Button, Form, Input, Select, Space } from "antd";

export default function Home() {
  const onfinish = (values) => {
    console.log({ values })
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <Form onFinish={onfinish} style={{ width: 500 }}>
        <Form.Item name={"teacher"} label={"Teacher Name"}>
          <Input placeholder="Enter Teacher Name" />
        </Form.Item>
        <Form.Item name={"class"} label={"class Name"}>
          <Input placeholder="Enter class Name" />
        </Form.Item>
        <Form.List name={"students"}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => {
                return (
                  <Space key={field.key} direction="horizontal">
                    <Form.Item
                      name={[field.name, "first"]}
                      label={`${index + 1}-student`}
                      rules={[{required:true, message:"Required"}]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "last"]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "gender"]}
                    >
                      <Select placeholder="Gender">
                        {["male", "female"].map(gender => {
                          return <Select.Option value={gender} key={gender}>{gender}</Select.Option>
                        })}
                      </Select>
                    </Form.Item>
                    <Button 
                    style={{height:40, color:"red"}}
                     onClick={() => {remove(field.name)}}>Delete</Button>
                  </Space>
                );
              })}
              <Form.Item>
                <Button type="dashed" block onClick={() => { add() }}>Add Student</Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}
