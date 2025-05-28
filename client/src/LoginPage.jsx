import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Login attempt:', formData);
    
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #e8eaf6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      maxWidth: '1200px',
      width: '100%',
      border: '1px solid #f1f5f9'
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'row',
      minHeight: '600px'
    },
    leftPanel: {
      width: '50%',
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%)',
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      pointerEvents: 'none'
    },
    circle1: {
      position: 'absolute',
      top: '-12rem',
      left: '-12rem',
      width: '24rem',
      height: '24rem',
      backgroundColor: 'white',
      borderRadius: '50%'
    },
    circle2: {
      position: 'absolute',
      bottom: '-10rem',
      right: '-10rem',
      width: '20rem',
      height: '20rem',
      backgroundColor: 'white',
      borderRadius: '50%'
    },
    brandContent: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      maxWidth: '28rem'
    },
    brandIcon: {
      width: '5rem',
      height: '5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 2rem auto',
      backdropFilter: 'blur(4px)'
    },
    brandTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    brandSubtitle: {
      fontSize: '1.125rem',
      color: '#c7d2fe',
      lineHeight: '1.6',
      marginBottom: '2rem'
    },
    featureList: {
      marginTop: '2rem',
      textAlign: 'left'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem'
    },
    featureDot: {
      width: '0.5rem',
      height: '0.5rem',
      backgroundColor: 'white',
      borderRadius: '50%',
      marginRight: '0.75rem'
    },
    featureText: {
      color: '#c7d2fe'
    },
    rightPanel: {
      width: '50%',
      padding: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    formContainer: {
      width: '100%',
      maxWidth: '28rem'
    },
    formHeader: {
      textAlign: 'center',
      marginBottom: '2.5rem'
    },
    formTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '0.5rem'
    },
    formSubtitle: {
      color: '#6b7280'
    },
    inputGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    inputContainer: {
      position: 'relative'
    },
    inputIcon: {
      position: 'absolute',
      left: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      pointerEvents: 'none'
    },
    input: {
      width: '100%',
      paddingLeft: '3rem',
      paddingRight: '1rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      color: '#111827',
      outline: 'none',
      transition: 'all 0.2s',
      '::placeholder': {
        color: '#9ca3af'
      }
    },
    inputFocus: {
      backgroundColor: '#f9fafb',
      borderColor: '#4f46e5',
      boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.2)'
    },
    passwordInput: {
      paddingRight: '3.5rem'
    },
    eyeButton: {
      position: 'absolute',
      right: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0.25rem',
      borderRadius: '0.25rem',
      transition: 'color 0.2s'
    },
    optionsRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.5rem'
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    checkbox: {
      marginRight: '0.5rem',
      accentColor: '#4f46e5'
    },
    checkboxLabel: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    forgotLink: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#4f46e5',
      textDecoration: 'none',
      transition: 'color 0.2s'
    },
    loginButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      color: 'white',
      padding: '1rem 1.5rem',
      borderRadius: '0.75rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.2s',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginButtonHover: {
      transform: 'translateY(-1px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    divider: {
      position: 'relative',
      margin: '2rem 0',
      textAlign: 'center'
    },
    dividerLine: {
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: '1px',
      backgroundColor: '#e5e7eb'
    },
    dividerText: {
      backgroundColor: 'white',
      padding: '0 1rem',
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    socialButtons: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem',
      marginBottom: '1.5rem'
    },
    socialButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem 1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '0.75rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.2s',
      textDecoration: 'none'
    },
    socialIcon: {
      marginRight: '0.5rem',
      width: '1.25rem',
      height: '1.25rem'
    },
    signupSection: {
      textAlign: 'center',
      paddingTop: '1.5rem',
      borderTop: '1px solid #f3f4f6'
    },
    signupText: {
      color: '#6b7280'
    },
    signupLink: {
      fontWeight: '600',
      color: '#4f46e5',
      textDecoration: 'none',
      transition: 'color 0.2s'
    },
    spinner: {
      animation: 'spin 1s linear infinite',
      borderRadius: '50%',
      width: '1.25rem',
      height: '1.25rem',
      border: '2px solid transparent',
      borderTop: '2px solid white',
      marginRight: '0.5rem'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.flexContainer}>
          
          
          <div style={styles.leftPanel}>
            <div style={styles.backgroundPattern}>
              <div style={styles.circle1}></div>
              <div style={styles.circle2}></div>
            </div>
            
            <div style={styles.brandContent}>
              <div style={styles.brandIcon}>
                <Lock size={32} color="white" />
              </div>
              
              <h1 style={styles.brandTitle}>Welcome Back</h1>
              <p style={styles.brandSubtitle}>
                Sign in to access your account and continue your journey with us.
              </p>
              
              <div style={styles.featureList}>
                
              </div>
            </div>
          </div>

          
          <div style={styles.rightPanel}>
            <div style={styles.formContainer}>
              <div style={styles.formHeader}>
                <h2 style={styles.formTitle}>Sign In</h2>
                <p style={styles.formSubtitle}>Enter your credentials to access your account</p>
              </div>
              
              <div>
                
                <div style={styles.inputGroup}>
                  <label htmlFor="username" style={styles.label}>
                    Username or Email
                  </label>
                  <div style={styles.inputContainer}>
                    <div style={styles.inputIcon}>
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Enter your username or email"
                      style={styles.input}
                      required
                    />
                  </div>
                </div>

               
                <div style={styles.inputGroup}>
                  <label htmlFor="password" style={styles.label}>
                    Password
                  </label>
                  <div style={styles.inputContainer}>
                    <div style={styles.inputIcon}>
                      <Lock size={18} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      style={{...styles.input, ...styles.passwordInput}}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={styles.eyeButton}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                
                <div style={styles.optionsRow}>
                  <label style={styles.checkboxContainer}>
                    <input
                      type="checkbox"
                      style={styles.checkbox}
                    />
                    <span style={styles.checkboxLabel}>Remember me</span>
                  </label>
                  <a href="#" style={styles.forgotLink}>
                    Forgot password?
                  </a>
                </div>

                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  style={styles.loginButton}
                >
                  {isLoading ? (
                    <>
                      <div style={styles.spinner}></div>
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </>
                  )}
                </button>

              
                <div style={styles.divider}>
                  <div style={styles.dividerLine}></div>
                  <span style={styles.dividerText}>Or continue with</span>
                </div>

                

                
                <div style={styles.signupSection}>
                  <p style={styles.signupText}>
                    Don't have an account?{' '}
                    <a href="#" style={styles.signupLink}>
                      Create account
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          input:focus {
            background-color: #f9fafb !important;
            border-color: #4f46e5 !important;
            box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2) !important;
          }
          
          button:hover {
            opacity: 0.9;
          }
          
          a:hover {
            opacity: 0.8;
          }
          
          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column !important;
            }
            
            .left-panel, .right-panel {
              width: 100% !important;
            }
            
            .left-panel {
              min-height: 300px !important;
            }
          }
        `}
      </style>
    </div>
  );
}