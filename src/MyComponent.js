import React from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eeddqldbduofythevqsn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZGRxbGRiZHVvZnl0aGV2cXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3MDg5MzMsImV4cCI6MTk5MjI4NDkzM30.CNSDxnJJlaHLlFi6boxhsy6LgjEPVXNFnB32CCm6Ej8'
const supabase = createClient(supabaseUrl, supabaseKey)

class MyComponent extends React.Component {
    state = {
      data: null,
      error: null,
    }
  
    async componentDidMount() {
      try {
        const { data, error } = await supabase
          .from('mytable')
          .select('*');
  
        if (error) {
          throw error;
        }
  
        this.setState({ data });
      } catch (error) {
        this.setState({ error });
      }
    }
  
    render() {
      const { data, error } = this.state;
  
      if (error) {
        return (
          <div>
            <p>Error fetching data from database.</p>
            <p>{error.message}</p>
          </div>
        );
      }
  
      if (!data) {
        return <p>Loading data...</p>;
      }
  
      return (
        <div>
          <p>Data fetched from database:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );
    }
  }
  
  export default MyComponent;
