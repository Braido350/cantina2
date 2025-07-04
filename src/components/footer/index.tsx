import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='backgroundHeader text-center py-4'>
            <span>
                &copy; {currentYear} Cantina. Versão 2.0.0. Todos os direitos reservados. Desenvolvido por Braido Soluções Digitais. 
            </span>
        </footer>
    );
};

export default Footer;