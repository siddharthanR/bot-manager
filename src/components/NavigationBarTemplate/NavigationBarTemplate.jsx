import { Header } from "antd/es/layout/layout";

export default function NavigationBarTemplate() {
    return (
        <>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className='title-style'>BOT MANAGER</div>
            </Header>
        </>
    )
}