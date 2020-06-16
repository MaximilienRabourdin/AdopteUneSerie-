import genres from 'src/data/genres';
import networks from 'src/data/networks';
import notes from 'src/data/notes';
import runtime from 'src/data/runTimeMax';

export default genres.genres.concat(networks.networks).concat(notes.notes).concat(runtime.runtime);
