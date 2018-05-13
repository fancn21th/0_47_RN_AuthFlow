import React from 'react'
import {
  Container,
  Content,
  Button,
  Input,
  Text,
  Form,
  Item
} from "native-base"

const SingIn = ({ onSignIn }) => {
  let emailValue, passwordValue
  return (
    <Container>
      <Content
        padder
        style={{ backgroundColor: "#fff", marginBottom: null }}
        bounces={false}
      >
        <Form>
          <Item underline style={{ marginLeft: 0 }}>
            <Input
              placeholder="Email address"
              onChangeText={text => emailValue = text}
            />
          </Item>
          <Item underline style={{ marginLeft: 0 }}>
            <Input
              onChangeText={text => passwordValue = text}
              placeholder="Password"
              secureTextEntry
            />
          </Item>
          <Button
            primary
            block
            onPress={() => onSignIn(emailValue, passwordValue)}
            style={{ marginTop: 30 }}
          >
            <Text> LOGIN </Text>
          </Button>
          <Button block transparent>
            <Text style={{ fontWeight: "700", fontSize: 12 }}>
              FORGOT PASSWORD?
            </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

export default SingIn
