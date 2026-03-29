import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [systemInfo, setSystemInfo] = useState({
        userAgent: '',
        platform: ''
    });

    useEffect(() => {
        const dataToStore = {
            userAgent: navigator.userAgent,
            platform: navigator.platform
        };

        localStorage.setItem('system_data', JSON.stringify(dataToStore));
        const savedData = JSON.parse(localStorage.getItem('system_data'));

        if (savedData) {
            setSystemInfo(savedData);
        }
    }, []); 

    return (
        <footer className="footer-container">
            <hr />
            <p>© 2026 Лариса Місюра. </p>
            
            <div className="system-info-box">
                <h4>Системна інформація:</h4>
                <p><strong>Браузер:</strong> {systemInfo.userAgent}</p>
                <p><strong>Платформа:</strong> {systemInfo.platform}</p>
            </div>

            <style jsx>{`
                .footer-container {
                    text-align: center;
                    padding: 20px;
                    margin-top: 40px;
                    color: #64748b;
                }
                .system-info-box {
                    background: #f1f5f9;
                    border: 1px solid #cbd5e1;
                    border-radius: 8px;
                    padding: 15px;
                    margin-top: 15px;
                    font-size: 0.8rem;
                    display: inline-block;
                    text-align: left;
                    max-width: 80%;
                }
                .system-info-box h4 {
                    margin-top: 0;
                    color: #1e40af;
                    font-size: 0.9rem;
                }
                .system-info-box p {
                    margin: 5px 0;
                    word-break: break-all;
                }
                hr {
                    border: 0;
                    border-top: 1px solid #e2e8f0;
                    margin-bottom: 20px;
                }
            `}</style>
        </footer>
    );
};

export default Footer;