import React from 'react';
import {
  Alert,
  Avatar,
  Button,
  Col,
  Card,
  Divider,
  Dropdown,
  Icon,
  Input,
  InputNumber,
  Layout,
  Menu,
  message,
  Modal,
  Pagination,
  Popconfirm,
  Row,
  Select,
  Spin,
  Slider,
  Switch,
  Table,
  Tooltip,
  Upload,
  DatePicker,
  List,
  Tabs,
  Checkbox,
  Radio,
  Affix,
} from 'antd';
const { TextArea } = Input;
const {
  Content,
  Header,
  Sider,
  Footer,
} = Layout;
const defaultFormItemStyle = {
  marginBottom: 15,
  label: {
    fontWeight: 700,
  },
}

function FormItem(props) {
  return (
    <div style={props.style || defaultFormItemStyle}>
      <span style={defaultFormItemStyle.label}>
        { props.label }:
      </span>
      <br />
      {props.children}
    </div>
  );
}
export {
    Alert,
    Avatar,
    Button,
    Col,
    Card,
    Content,
    Divider,
    Dropdown,
    Footer,
    FormItem,
    Header,
    Icon,
    Input,
    InputNumber,
    Layout,
    Menu,
    message,
    Modal,
    Option,
    Pagination,
    Popconfirm,
    Row,
    Select,
    Sider,
    Slider,
    Spin,
    Switch,
    Table,
    Tooltip,
    TextArea,
    Upload,
    DatePicker,
    List,
    Tabs,
    Checkbox,
    Radio,
    Affix
  };