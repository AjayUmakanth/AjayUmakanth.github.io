<template>
  <section id="publications" class="publications" aria-labelledby="publications-title">
    <div class="publications-container">
      <h2 id="publications-title">Publications</h2>
      <div class="separator" aria-hidden="true"></div>
      <ul class="publication-list">
        <li v-for="publication in publications" :key="publication.Link" class="publication">
          <span class="publication-date">{{ publication.Date }}</span>
          <div class="publication-content">
            <h3>
              <a :href="publication.Link" target="_blank" rel="noopener noreferrer">
                {{ publication.Title }}
                <i class="fa fa-external-link" aria-hidden="true"></i>
                <span class="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </h3>
            <p class="publication-journal">{{ publication.Journal }}</p>
            <p class="publication-description">{{ publication.Description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import other from '../json/Other.json'

export default {
  name: 'Publications',
  data() {
    return { publications: other.Publications }
  }
}
</script>

<style scoped>
.publications {
  padding: 40px 20px;
  margin: 30px 0;
}
.publications-container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
}
.publications h2 {
  margin: 0 0 20px;
  color: white;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
}
.separator {
  height: 2px;
  width: 80%;
  margin: 0 auto 16px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
}
.publication-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.publication {
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr);
  gap: 28px;
  padding: 28px 0;
}
.publication + .publication {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.publication-date {
  padding-top: 4px;
  color: #bdbdbd;
  font-size: 0.9rem;
  font-variant-numeric: tabular-nums;
}
.publication h3 {
  margin: 0 0 8px;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
}
.publication a {
  color: white;
  text-decoration: none;
  overflow-wrap: anywhere;
}
.publication a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.publication a:focus-visible {
  outline: 2px solid white;
  outline-offset: 4px;
}
.publication a i {
  margin-left: 8px;
  font-size: 0.75rem;
  color: #bdbdbd;
}
.publication-journal {
  margin: 0 0 8px;
  color: #bdbdbd;
  font-size: 0.85rem;
  line-height: 1.6;
}
.publication-description {
  margin: 0;
  color: #d0d0d0;
  font-size: 0.95rem;
  line-height: 1.7;
}
@media (max-width: 768px) {
  .publications-container { width: 95%; padding: 30px 20px; }
  .publications h2 { font-size: 2.5rem; }
  .publication { grid-template-columns: 1fr; gap: 8px; padding: 24px 0; }
  .publication-date { padding: 0; }
}
@media (max-width: 480px) {
  .publications { padding: 40px 15px; }
  .publications-container { width: 98%; padding: 20px 15px; }
  .publications h2 { font-size: 2rem; }
  .publication h3 { font-size: 1.1rem; }
}
</style>
