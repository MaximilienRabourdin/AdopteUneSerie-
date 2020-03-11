import genres from 'src/data/genres';
import networks from 'src/data/networks';
import notes from 'src/data/notes';
import runtime from 'src/data/runTimeMax';

const genresOptions = genres.genres.map( state => ({
  key: state.id,
  text: state.name,
  value: state.name,
  style: { color: 'teal' }
}
));
const networksOptions = networks.networks.map( state => ({
  key: state.id,
  text: state.name,
  value: state.name,
  style: { color: 'green' }
}
));
const notesOptions = notes.notes.map( state => ({
  key: state.id,
  text: state.name,
  value: state.name,
  style: { color: 'orange' }
}
));
const runtimeOptions = runtime.runtime.map( state => ({
  key: state.id,
  text: state.name,
  value: state.name,
  style: { color: 'purple' }
}
));

const options = genresOptions.concat(networksOptions).concat(notesOptions).concat(runtimeOptions);
 export default options;
