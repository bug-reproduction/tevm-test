import { createTevmNode } from 'tevm';
import { requestEip1193, ethActions } from 'tevm/decorators';

export async function test() {
	const node = createTevmNode().extend(ethActions()).extend(requestEip1193());

	// Use standard JSON-RPC methods
	const blockNum = await node.request({
		method: 'eth_blockNumber'
	});

	console.log(blockNum);

	// Use standard JSON-RPC methods
	const accounts = await node.request({
		method: 'eth_accounts'
	});

	console.log(accounts);

	await node.request({
		method: 'eth_sendTransaction',
		params: [
			{
				from: accounts[0],
				to: accounts[1],
				value: '0x1'
			}
		]
	});
}
