<template>
  <div class="app">
    <header>
      <div class="logo">COOK</div>
      <nav>
        <a href="#features">Features</a>
        <a href="#waitlist">Join Waitlist</a>
        <a href="#journey">Follow Journey</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>COOK</h1>
          <p class="tagline">Cooking for lazy devs</p>
          <div class="description">
            <p>Automate your cooking workflow with simple CLI commands.</p>
            <p>No more recipe hunting. Just code and eat.</p>
          </div>
          <div class="cta-buttons">
            <button class="primary-btn" @click="scrollToWaitlist">Join Waitlist</button>
            <button class="secondary-btn" @click="scrollToDemo">See Demo</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="terminal-frame">
            <div class="terminal-header">
              <div class="terminal-buttons">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="terminal-title">cook --help</div>
            </div>
            <div class="terminal-body">
              <div class="command-line">
                <span class="prompt">$</span>
                <span class="command">cook --version</span>
              </div>
              <div class="output">COOK CLI v0.1.0-alpha</div>

              <div class="command-line">
                <span class="prompt">$</span>
                <span class="command">cook list recipes</span>
              </div>
              <div class="output">
                <div class="recipe-item">pasta-carbonara <span class="tag">quick</span> <span class="tag">italian</span></div>
                <div class="recipe-item">chicken-curry <span class="tag">spicy</span> <span class="tag">indian</span></div>
                <div class="recipe-item">avocado-toast <span class="tag">breakfast</span> <span class="tag">vegan</span></div>
              </div>

              <div class="command-line">
                <span class="prompt">$</span>
                <span class="command">cook prepare pasta-carbonara --serves 2</span>
              </div>
              <div class="output">
                <div class="progress-bar">
                  <div class="progress-fill"></div>
                </div>
                <div class="progress-text">Preparing recipe: 100% complete</div>
                <div class="success-message">✓ Recipe ready! Estimated cooking time: 15 minutes</div>
              </div>

              <div class="command-line">
                <span class="prompt">$</span>
                <span class="command">cook ingredients pasta-carbonara</span>
              </div>
              <div class="output">
                <div class="ingredient-item">200g spaghetti</div>
                <div class="ingredient-item">100g pancetta</div>
                <div class="ingredient-item">2 large eggs</div>
                <div class="ingredient-item">50g pecorino cheese</div>
                <div class="ingredient-item">50g parmesan</div>
                <div class="ingredient-item">Black pepper (to taste)</div>
              </div>

              <div class="command-line">
                <span class="prompt">$</span>
                <span class="command blink">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="features">
        <h2>Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Quick Recipes</h3>
            <p>Find and prepare recipes in seconds with simple commands</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>Smart Search</h3>
            <p>Filter by ingredients, time, dietary restrictions</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Portion Scaling</h3>
            <p>Automatically adjust ingredients for any number of servings</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Ingredient Substitution</h3>
            <p>Suggest alternatives for ingredients you don't have</p>
          </div>
        </div>
      </section>

      <section id="demo" class="demo">
        <h2>Interactive Demo</h2>
        <div class="demo-container">
          <div class="demo-controls">
            <button @click="runDemo('list')" :class="{ active: activeDemo === 'list' }">List Recipes</button>
            <button @click="runDemo('search')" :class="{ active: activeDemo === 'search' }">Search</button>
            <button @click="runDemo('prepare')" :class="{ active: activeDemo === 'prepare' }">Prepare</button>
            <button @click="runDemo('shopping')" :class="{ active: activeDemo === 'shopping' }">Shopping List</button>
          </div>
          <div class="demo-terminal">
            <div class="terminal-header">
              <div class="terminal-buttons">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="terminal-title">COOK Demo</div>
            </div>
            <div class="terminal-body">
              <div v-if="activeDemo === 'list'">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">cook list recipes --tag quick</span>
                </div>
                <div class="output">
                  <div class="recipe-item">pasta-carbonara <span class="tag">quick</span> <span class="tag">italian</span></div>
                  <div class="recipe-item">avocado-toast <span class="tag">quick</span> <span class="tag">breakfast</span></div>
                  <div class="recipe-item">omelette <span class="tag">quick</span> <span class="tag">breakfast</span></div>
                  <div class="recipe-item">stir-fry <span class="tag">quick</span> <span class="tag">asian</span></div>
                </div>
              </div>

              <div v-if="activeDemo === 'search'">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">cook search --ingredients "chicken,rice" --time-max 30</span>
                </div>
                <div class="output">
                  <div class="recipe-item">chicken-fried-rice <span class="tag">asian</span> <span class="time-tag">25min</span></div>
                  <div class="recipe-item">chicken-rice-bowl <span class="tag">healthy</span> <span class="time-tag">20min</span></div>
                  <div class="recipe-item">chicken-risotto <span class="tag">italian</span> <span class="time-tag">30min</span></div>
                </div>
              </div>

              <div v-if="activeDemo === 'prepare'">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">cook prepare stir-fry --serves 2</span>
                </div>
                <div class="output">
                  <div class="step-item">1. Heat oil in wok over high heat</div>
                  <div class="step-item">2. Add diced chicken, cook until golden (4-5 min)</div>
                  <div class="step-item">3. Add vegetables, stir for 2-3 minutes</div>
                  <div class="step-item">4. Add sauce mixture, cook for 1 minute</div>
                  <div class="step-item">5. Serve immediately over rice</div>
                </div>
              </div>

              <div v-if="activeDemo === 'shopping'">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">cook shopping-list --recipes "pasta-carbonara,chicken-curry" --serves 4</span>
                </div>
                <div class="output">
                  <div class="shopping-category">Produce</div>
                  <div class="shopping-item">2 onions</div>
                  <div class="shopping-item">4 cloves garlic</div>
                  <div class="shopping-category">Meat</div>
                  <div class="shopping-item">200g pancetta</div>
                  <div class="shopping-item">500g chicken breast</div>
                  <div class="shopping-category">Dairy</div>
                  <div class="shopping-item">8 large eggs</div>
                  <div class="shopping-item">100g parmesan</div>
                  <div class="shopping-category">Pantry</div>
                  <div class="shopping-item">400g spaghetti</div>
                  <div class="shopping-item">curry powder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" class="waitlist">
        <h2>Join the Waitlist</h2>
        <p>Be the first to know when COOK is ready to serve.</p>
        <form @submit.prevent="submitWaitlist" class="waitlist-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="waitlistEmail"
              placeholder="your@email.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="cooking-level">Cooking Experience</label>
            <select id="cooking-level" v-model="cookingLevel">
              <option value="beginner">Beginner (I burn water)</option>
              <option value="intermediate">Intermediate (I can follow recipes)</option>
              <option value="advanced">Advanced (I experiment with recipes)</option>
            </select>
          </div>
          <button type="submit" class="primary-btn">Join Waitlist</button>
        </form>
        <div v-if="waitlistSubmitted" class="success-message">
          Thanks for joining! We'll notify you when COOK is ready.
        </div>
      </section>

      <section id="journey" class="journey">
        <h2>Follow the Journey</h2>
        <div class="journey-timeline">
          <div class="timeline-item">
            <div class="timeline-date">May 2023</div>
            <div class="timeline-content">
              <h3>Concept</h3>
              <p>COOK was born out of frustration with recipe websites</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">July 2023</div>
            <div class="timeline-content">
              <h3>Alpha Development</h3>
              <p>First prototype with basic recipe search functionality</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">October 2023</div>
            <div class="timeline-content">
              <h3>Beta Testing</h3>
              <p>Closed beta with 50 developers who love cooking</p>
            </div>
          </div>
          <div class="timeline-item active">
            <div class="timeline-date">Now</div>
            <div class="timeline-content">
              <h3>Waitlist Open</h3>
              <p>Building features based on beta feedback</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Coming Soon</div>
            <div class="timeline-content">
              <h3>Public Launch</h3>
              <p>COOK will be available for everyone</p>
            </div>
          </div>
        </div>
        <div class="social-links">
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">GitHub</a>
          <a href="#" class="social-link">Discord</a>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-content">
        <div class="footer-logo">COOK</div>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
        <div class="footer-copyright">
          © {{ new Date().getFullYear() }} COOK CLI. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      waitlistEmail: '',
      cookingLevel: 'beginner',
      waitlistSubmitted: false,
      activeDemo: 'list'
    }
  },
  methods: {
    scrollToWaitlist() {
      document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToDemo() {
      document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
    },
    submitWaitlist() {
      // Here you would typically send the data to your backend
      console.log('Submitted:', { email: this.waitlistEmail, level: this.cookingLevel });
      this.waitlistSubmitted = true;
      this.waitlistEmail = '';
      this.cookingLevel = 'beginner';

      // Reset the success message after 5 seconds
      setTimeout(() => {
        this.waitlistSubmitted = false;
      }, 5000);
    },
    runDemo(type) {
      this.activeDemo = type;
    }
  }
}
</script>

<style>
:root {
  --bg-color: #0a0a0a;
  --text-color: #f0f0f0;
  --primary-color: #50fa7b;
  --secondary-color: #bd93f9;
  --accent-color: #ff79c6;
  --terminal-bg: #1a1a1a;
  --terminal-header: #2a2a2a;
  --success-color: #50fa7b;
  --error-color: #ff5555;
  --border-color: #333;
  --card-bg: #1a1a1a;
  --tag-bg: #44475a;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--border-color);
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-color);
  letter-spacing: 2px;
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: var(--primary-color);
}

/* Main content */
main {
  flex: 1;
}

section {
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1, h2, h3 {
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 4rem;
  letter-spacing: 3px;
  color: var(--primary-color);
}

h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--secondary-color);
}

h3 {
  font-size: 1.5rem;
  color: var(--accent-color);
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  min-height: 80vh;
}

.tagline {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
}

.description {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  max-width: 500px;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.primary-btn, .secondary-btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background-color: var(--primary-color);
  color: var(--bg-color);
}

.primary-btn:hover {
  background-color: #3ad66e;
}

.secondary-btn {
  background-color: transparent;
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
}

.secondary-btn:hover {
  background-color: rgba(189, 147, 249, 0.1);
}

/* Terminal Styling */
.terminal-frame {
  background-color: var(--terminal-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.terminal-header {
  background-color: var(--terminal-header);
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
  margin-right: 1rem;
}

.terminal-buttons span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.terminal-buttons span:nth-child(1) {
  background-color: #ff5f56;
}

.terminal-buttons span:nth-child(2) {
  background-color: #ffbd2e;
}

.terminal-buttons span:nth-child(3) {
  background-color: #27c93f;
}

.terminal-title {
  font-size: 0.9rem;
  color: #aaa;
}

.terminal-body {
  padding: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.8;
}

.command-line {
  display: flex;
  margin-bottom: 0.5rem;
}

.prompt {
  color: var(--primary-color);
  margin-right: 0.5rem;
}

.command {
  color: var(--text-color);
}

.output {
  color: #bbb;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
}

.recipe-item, .ingredient-item, .step-item, .shopping-item {
  margin-bottom: 0.3rem;
}

.tag {
  background-color: var(--tag-bg);
  color: var(--text-color);
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  font-size: 0.7rem;
  margin-left: 0.5rem;
}

.time-tag {
  background-color: var(--accent-color);
  color: var(--bg-color);
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  font-size: 0.7rem;
  margin-left: 0.5rem;
}

.progress-bar {
  height: 10px;
  background-color: var(--border-color);
  border-radius: 5px;
  margin: 0.5rem 0;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 100%;
  background-color: var(--primary-color);
  animation: fillProgress 2s ease-out;
}

@keyframes fillProgress {
  from { width: 0; }
  to { width: 100%; }
}

.progress-text {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.success-message {
  color: var(--success-color);
  margin: 1rem 0;
}

.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* Features Section */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* Demo Section */
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.demo-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-controls button {
  padding: 0.6rem 1.2rem;
  background-color: var(--terminal-header);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.demo-controls button:hover, .demo-controls button.active {
  background-color: var(--primary-color);
  color: var(--bg-color);
}

.demo-terminal {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

/* Waitlist Section */
.waitlist {
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
}

.waitlist p {
  max-width: 600px;
  margin: 0 auto 2rem;
}

.waitlist-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.5rem;
}

label {
  font-size: 0.9rem;
  color: var(--secondary-color);
}

input, select {
  padding: 0.8rem;
  background-color: var(--terminal-bg);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-color);
  font-family: inherit;
}

input:focus, select:focus {
  outline: none;
  border-color: var(--primary-color);
}

/* Journey Section */
.journey-timeline {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.journey-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 120px;
  width: 2px;
  background-color: var(--border-color);
}

.timeline-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  left: 115px;
  top: 5px;
}

.timeline-item.active::before {
  background-color: var(--primary-color);
  width: 16px;
  height: 16px;
  left: 113px;
  top: 3px;
}

.timeline-date {
  text-align: right;
  font-size: 0.9rem;
  color: var(--secondary-color);
  padding-top: 0.2rem;
}

.timeline-content {
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.social-link {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--primary-color);
}

/* Footer */
footer {
  background-color: var(--terminal-bg);
  padding: 2rem;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.footer-copyright {
  font-size: 0.8rem;
  color: #777;
}

/* Shopping list styling */
.shopping-category {
  color: var(--accent-color);
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
}

/* Responsive design */
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .description {
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    justify-content: center;
  }

  .journey-timeline::before {
    left: 20px;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    padding-left: 40px;
  }

  .timeline-item::before {
    left: 15px;
  }

  .timeline-item.active::before {
    left: 13px;
  }

  .timeline-date {
    text-align: left;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 600px) {
  header {
    flex-direction: column;
    gap: 1rem;
  }

  nav {
    gap: 1rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  section {
    padding: 3rem 1rem;
  }

  .waitlist {
    padding: 2rem 1rem;
  }
}
</style>
