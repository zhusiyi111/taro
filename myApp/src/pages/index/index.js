import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

	config = {
		navigationBarTitleText: '首页'
	}

	constructor(props) {
		super(props);
		this.state = {
			moduleList: []
		}
	}

	componentWillMount() { }

	componentDidMount() {
		Taro.request({
			url: '//localhost:3000',
			method: "GET",
		}).then(result => {
			const moduleList = result.data.data.pageModuleList;
			this.setState({
				moduleList,
			});
		})

	}

	componentWillUnmount() { }

	componentDidShow() { }

	componentDidHide() { }

	renderModules(moduleList) {
		console.log(moduleList);
		return moduleList.map(v => {
			return <View>321312</View>
		})
	}

	render() {
		const { moduleList } = this.state;
		return (
			<View className='index'>
				<Text>Hello world!!12321313!</Text>
				{this.renderModules(moduleList)}
			</View>
		)
	}
}

