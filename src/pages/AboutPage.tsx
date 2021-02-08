import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage:React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>AboutPage</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid asperiores aspernatur at beatae consequuntur corporis culpa dolore ducimus earum excepturi, harum illo incidunt ipsa ipsum iure iusto libero magni maiores modi nemo nihil non nostrum perferendis placeat quas quod reprehenderit repudiandae, rerum sapiente sunt tempora tenetur voluptatum. Cumque, cupiditate?</p>
        <button className="btn" onClick={()=>{history.push('/')}}>
            Обратно к списку дел
        </button>
        </>
    );
};

export default AboutPage;