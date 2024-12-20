"use client"
import { useEffect, useState } from "react"
import styles from "./page.module.css"

export default function Home() {
	const [currentData, setCurrentData] = useState<{ message: string }>()
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("http://localhost:4201/")
			const data = await res.json()
			setCurrentData(data)
		}
		fetchData()
	}, [])
	return (
		<div className={styles.page}>
			{currentData && <p>{currentData.message}</p>}
		</div>
	)
}
