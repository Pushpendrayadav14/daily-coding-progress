import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./NotFound.module.css";

const randomNumber = () => Math.floor(Math.random() * 9) + 1;

const NotFound = () => {
  const [digit1, setDigit1] = useState(0);
  const [digit2, setDigit2] = useState(0);
  const [digit3, setDigit3] = useState(0);

  useEffect(() => {
    let i = 0;

    const loop3 = setInterval(() => {
      if (i > 40) {
        clearInterval(loop3);
        setDigit3(4);
      } else {
        setDigit3(randomNumber());
        i++;
      }
    }, 30);

    const loop2 = setInterval(() => {
      if (i > 80) {
        clearInterval(loop2);
        setDigit2(0);
      } else {
        setDigit2(randomNumber());
        i++;
      }
    }, 30);

    const loop1 = setInterval(() => {
      if (i > 100) {
        clearInterval(loop1);
        setDigit1(4);
      } else {
        setDigit1(randomNumber());
        i++;
      }
    }, 30);

    return () => {
      clearInterval(loop1);
      clearInterval(loop2);
      clearInterval(loop3);
    };
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-white ${styles.page}`}
    >
      <div className="text-center">
        {/* 404 Animation */}

        <div className={styles.errorContainer}>
          <div className={styles.clip}>
            <div className={styles.shadow}>
              <span className={styles.digit}>{digit3}</span>
            </div>
          </div>

          <div className={styles.clip}>
            <div className={styles.shadow}>
              <span className={styles.digit}>{digit2}</span>
            </div>
          </div>

          <div className={styles.clip}>
            <div className={styles.shadow}>
              <span className={styles.digit}>{digit1}</span>
            </div>
          </div>

          <div className={styles.msg}>
            OH!
            <span className={styles.triangle}></span>
          </div>
        </div>

        {/* Heading */}

        <h1 className="text-5xl font-bold mt-8 text-gray-700">404</h1>

        <h2 className="text-2xl font-semibold mt-4 text-gray-500">
          Sorry! Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 max-w-lg mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}

        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 bg-sky-500 hover:bg-sky-700 text-white rounded-lg font-semibold duration-300"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
