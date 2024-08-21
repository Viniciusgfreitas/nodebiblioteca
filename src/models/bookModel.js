// initialization functions
const app = {}
const supabase = require('../config/supabase');

// DAO - [ BOOK ] createBook
app.createBook = async(req, res) => {
  try {

    const datareq = req.body;

    const { data, error } = await supabase
      .from('book')
      .insert(datareq)
      .select();

    if (error) throw error;

    return data;
  } catch (error) { throw error; }
}

// DAO - [ BOOK ] readBook
app.readBook = async(req, res) => {
  try {
    const id = req.body.id || 1; // Identification Book

    const { data, error } = await supabase
      .from('book')
      .select()
      .eq('id', id)

      if (error) throw error;

      return data;
  } catch (error) { throw error; }
}

// DA0 - [ BOOK ] updateBook
app.updateBook = async(req, res) => {
  try {
    const dataUpdate = req.body.update;  // Update data
    const id         = req.body.id || 1; // Identification Book

    const { data, error } = await supabase
      .from('book')
      .update(dataUpdate)
      .eq('id', id)
      .select()

      if (error) throw error;

      return data;
  } catch (error) { throw error; }
}

// DA0 - [ BOOK ] deleteBook
app.deleteBook = async(req, res) => {
  try {
    const id = req.body.id || 1; // Identification Book

    const { data, error } = await supabase
      .from('book')
      .delete()
      .eq('id', id)

      if (error) throw error;

      return data;
  } catch (error) { throw error; }
}

// DAO - [ BOOK ] getAllBook
app.getAllBook = async(req, res) => {
  try {
    const { data, error } = await supabase.from('book').select('*');
    if (error) throw error;

    return data;
  } catch (error) { throw error; }
}

// Module exports
module.exports = app;