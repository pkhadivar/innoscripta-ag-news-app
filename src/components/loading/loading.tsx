import { ThreeDots } from 'react-loader-spinner';

export const Loader: React.FC = () => {
    return (
        <div style={{ padding: 350 }}>
            <ThreeDots
                height='80'
                width='80'
                radius='9'
                color='#4fa94d'
                ariaLabel='three-dots-loading'
                wrapperStyle={{}}
                visible={true}
            />
        </div>
    );
};

