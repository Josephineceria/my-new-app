import React from 'react';
import MyComponent from './MyComponent';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eeddqldbduofythevqsn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZGRxbGRiZHVvZnl0aGV2cXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3MDg5MzMsImV4cCI6MTk5MjI4NDkzM30.CNSDxnJJlaHLlFi6boxhsy6LgjEPVXNFnB32CCm6Ej8';
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  return (
    <div className="App">
      <MyComponent supabase={supabase} />
    </div>
  );
}

export default App;