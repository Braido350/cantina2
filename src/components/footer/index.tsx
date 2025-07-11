import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    //Todos os direitos reservados. Desenvolvido por Braido Soluções Digitais. 
    return (
        <footer className='backgroundHeader text-center py-4 '>
            <span>
                &copy; {currentYear} *LOGO*. Versão 2.0.0. 
            </span>
        </footer>
    );
};

export default Footer;