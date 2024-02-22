'use client'
import { Descope } from '@descope/nextjs-sdk';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Login() {
	const router = useRouter()
	const [loading, setLoading] = useState(true)
	const onSuccess = () => {
		// navigate to the home page
		router.push('/')
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh'
			}}
		>
			<h1>App Router Login</h1>
			{/* Note that if the component is rendered on the server
			you cannot pass onSuccess/onError callbacks because they are not serializable. */}
			<Descope
				flowId={process.env.NEXT_PUBLIC_DESCOPE_FLOW_ID || 'sign-up-or-in'}
				onSuccess={onSuccess}
				onReady={() => setLoading(false)}
			/>
			{loading && <p>Loading...</p>}
		</div>
	);
}
