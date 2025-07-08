/* Untuk efek tampil/hilang menu transparan */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.85); /* transparan */
  width: 100%;
  height: 100%;
  padding: 80px 20px 20px;
  display: none;
  flex-direction: column;
  gap: 16px;
  z-index: 1000;
  backdrop-filter: blur(8px);
  transition: opacity 0.3s ease;
}

.mobile-menu.show {
  display: flex;
}

.hamburger {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 28px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
}

.close-btn {
  position: absolute;
  top: 12px;
  left: 16px;
  font-size: 32px;
  background: none;
  border: none;
  color: #00695c;
  cursor: pointer;
  z-index: 1001;
    }
